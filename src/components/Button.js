import { useContext } from "react";
import { TriviaContext } from "../TriviaContext";

export default function Button(props) {
  /* const [trivia, setTrivia] = useContext(TriviaContext);
  const selectAnswer = (id) => {
    setTrivia((prev) => {
      return prev.map((element) => {
        return element.answers.map((answer) => {
          return answer.id === id
            ? { ...answer, isSelected: !answer.isSelected }
            : answer;
        });
      });
    });
    console.log(trivia);
  }; */

  return (
    <button
      className={props.isSelected ? "button selected" : "button"}
      onClick={props.selectAnswer}
    >
      {props.answer}
    </button>
  );
}
