import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import Trivia from "./Trivia";
import { TriviaContext } from "../TriviaContext";
import Loading from "./Loading";

export default function Quiz() {
  const { trivia, check, setCheck, setReset, isLoading } =
    useContext(TriviaContext);
  const [count, setCount] = useState(0);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

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
        qId={trivia.qId}
        correctAnswer={trivia.correctAnswer}
        answers={trivia.answers}
      />
    );
  });

  return (
    <div className="page1">
      <h1 className="title">How many can you score?</h1>
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
