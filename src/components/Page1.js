import { nanoid } from "nanoid";
import { useContext } from "react";
import Trivia from "./Trivia";
import { TriviaContext } from "../TriviaContext";

export default function Page1() {
  const [trivia, setTrivia] = useContext(TriviaContext);

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
      <button className="btn check">Check answers</button>
    </div>
  );
}
