//import shuffleArray from "./modules/shuffleArray";
import { useContext } from "react";
import { TriviaContext } from "../TriviaContext";
import { nanoid } from "nanoid";
import Button from "./Button";

export default function Trivia(props) {
  const [trivia, setTrivia] = useContext(TriviaContext);
  const selectAnswer = (id) => {
    setTrivia((prev) => {
      return prev.map((element) => {
        return {
          ...element,
          answers: element.answers.map((answer) => {
            return answer.id === id
              ? { ...answer, isSelected: !answer.isSelected }
              : answer;
          }),
        };
      });
    });
  };

  const buttonsComp = props.answers.map((element) => {
    return (
      <Button
        answer={element.answer}
        key={nanoid()}
        isSelected={element.isSelected}
        id={element.id}
        selectAnswer={() => selectAnswer(element.id)}
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
