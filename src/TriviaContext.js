import { useState, createContext, useEffect } from "react";
import { nanoid } from "nanoid";
import shuffleArray from "./components/modules/shuffleArray";

export const TriviaContext = createContext();

export const TriviaProvider = (props) => {
  const [trivia, setTrivia] = useState();
  const [check, setCheck] = useState(false);
  const [reset, setReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setTrivia(() => {
            return data.results.map((result) => {
              return {
                question: result.question,
                correctAnswer: result.correct_answer,
                answers: shuffleArray(
                  [...result.incorrect_answers, result.correct_answer].map(
                    (el) => {
                      return {
                        answer: el,
                        isSelected: false,
                        isCorrect: result.correct_answer === el ? true : false,
                        id: nanoid(),
                      };
                    }
                  )
                ),
              };
            });
          });
        }
        setIsLoading(false);
      })

      .catch((error) => console.log("error"));
  }, [reset]);

  return (
    <TriviaContext.Provider
      value={{
        trivia,
        setTrivia,
        check,
        setCheck,
        reset,
        setReset,
        isLoading,
      }}
    >
      {props.children}
    </TriviaContext.Provider>
  );
};
