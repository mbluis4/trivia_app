import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Trivia from "./Trivia";

export default function Page1() {
  const [trivia, setTrivia] = useState([]);

  const questions = trivia.map((trivia) => {
    return (
      <Trivia
        key={nanoid()}
        question={trivia.question}
        correctAnswer={trivia.correct_answer}
        incorrectAnswers={trivia.incorrect_answers}
      />
    );
  });

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setTrivia(data.results);
      });
  }, []);

  return (
    <div className="page1">
      {questions}
      <button className="btn check">Check answers</button>
    </div>
  );
}
