import { useState, createContext, useEffect } from "react";
import { nanoid } from "nanoid";
import shuffleArray from "./components/modules/shuffleArray";

export const TriviaContext = createContext();

export const TriviaProvider = (props) => {
  const [trivia, setTrivia] = useState();
  const [check, setCheck] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
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
      });
  }, [reset]);

  return (
    <TriviaContext.Provider
      value={{
        value: [trivia, setTrivia],
        value2: [check, setCheck],
        value3: [reset, setReset],
      }}
    >
      {props.children}
    </TriviaContext.Provider>
  );
};
