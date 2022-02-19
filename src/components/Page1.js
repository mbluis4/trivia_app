import { nanoid } from "nanoid";
import { useContext } from "react";
import Trivia from "./Trivia";
import { TriviaContext } from "../TriviaContext";

export default function Page1() {
  const { value, value2 } = useContext(TriviaContext);
  const [trivia, setTrivia] = value;
  const [check, setCheck] = value2;

  const checkAnswers = () => {
    setCheck(true);
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
    </div>
  );
}
