import { useContext } from "react";
import { TriviaContext } from "../TriviaContext";

export default function Button(props) {
  const { value2 } = useContext(TriviaContext);
  const [check, setCheck] = value2;

  let buttonStyle = "button";

  if (props.isSelected) buttonStyle = "button selected";

  if (check) {
    if (props.isCorrect !== props.isSelected) {
      buttonStyle = "button incorrect";
    }
    if (props.isCorrect) {
      buttonStyle = "button correct";
    } else if (!props.isSelected && !props.isCorrect)
      buttonStyle = "button faded";
  }

  return (
    <button className={buttonStyle} onClick={props.selectAnswer}>
      {props.answer}
    </button>
  );
}
