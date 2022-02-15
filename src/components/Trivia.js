import shuffleArray from "./modules/shuffleArray";
import { nanoid } from "nanoid";
import Button from "./Button";

export default function Trivia(props) {
  const correctAnswer = props.correctAnswer;
  const incorrectAnswers = props.incorrectAnswers;
  incorrectAnswers.push(correctAnswer);
  const shuffleOptions = shuffleArray(incorrectAnswers);

  const buttonsComp = shuffleOptions.map((option) => {
    return (
      <Button
        option={option}
        correctAnswer={props.correctAnswer}
        key={nanoid()}
      />
    );
  });

  return (
    <div className="trivia">
      <h2 className="question">{props.question}</h2>
      <div className="buttons">{buttonsComp}</div>
    </div>
  );
}
