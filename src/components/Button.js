import { useContext } from "react";
import { TriviaContext } from "../TriviaContext";

export default function Button({
  answer,
  isSelected,
  isCorrect,
  selectAnswer,
  id,
  qId,
}) {
  const { check } = useContext(TriviaContext);

  let buttonStyle = "button";

  if (isSelected) buttonStyle = "button selected";

  if (check) {
    if (isCorrect !== isSelected) {
      buttonStyle = "button incorrect";
    }
    if (isCorrect) {
      buttonStyle = "button correct";
    } else if (!isSelected && !isCorrect) buttonStyle = "button faded";
  }

  return (
    <button className={buttonStyle} onClick={() => selectAnswer(id, qId)}>
      {answer}
    </button>
  );
}
