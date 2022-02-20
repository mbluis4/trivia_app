import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import Trivia from "./Trivia";
import { TriviaContext } from "../TriviaContext";

export default function Page1() {
  const { value, value2 } = useContext(TriviaContext);
  const [count, setCount] = useState(0);
  const [trivia, setTrivia] = value;
  const [check, setCheck] = value2;

  const checkAnswers = () => {
    setCheck(true);
    // count correct answers
    trivia.forEach((trivia) => {
      trivia.answers.forEach((element) => {
        if (element.isCorrect & (element.isCorrect === element.isSelected))
          setCount((prev) => prev + 1);
      });
    });
    console.log(count);
  };
  //console.log(trivia);

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
      <button className="btn check" onClick={checkAnswers}>
        Check answers
      </button>
      {check && <h2>You scored {count}/5 correct answers</h2>}
    </div>
  );
}
