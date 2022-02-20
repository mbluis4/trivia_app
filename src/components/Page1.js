import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import Trivia from "./Trivia";
import { TriviaContext } from "../TriviaContext";

export default function Page1(props) {
  const { value, value2, value3 } = useContext(TriviaContext);
  const [count, setCount] = useState(0);
  const [trivia, setTrivia] = value;
  const [check, setCheck] = value2;
  const [reset, setReset] = value3;

  const checkAnswers = () => {
    if (!check) {
      setCheck(true);
      // count correct answers
      trivia.forEach((trivia) => {
        trivia.answers.forEach((element) => {
          if (element.isCorrect & (element.isCorrect === element.isSelected))
            setCount((prev) => prev + 1);
        });
      });
    } else {
      props.resetGame();
      setTrivia((prev) => {
        return prev.map((element) => {
          return {
            ...element,
            answers: element.answers.map((answer) => {
              return { ...answer, isSelected: false };
            }),
          };
        });
      });
      setCheck(false);
      setReset((prev) => !prev);
      setCount(0);
    }
  };

  const questions = trivia.map((trivia) => {
    return (
      <Trivia
        key={nanoid()}
        question={trivia.question}
        correctAnswer={trivia.correctAnswer}
        answers={trivia.answers}
      />
    );
  });

  return (
    <div className="page1">
      {questions}
      <div className="bottom">
        {check && (
          <h2 className="question">You scored {count}/5 correct answers</h2>
        )}
        <button className="btn check" onClick={checkAnswers}>
          {check ? "Play again" : "Check answers"}
        </button>
      </div>
    </div>
  );
}
