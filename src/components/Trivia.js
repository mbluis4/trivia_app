//import shuffleArray from "./modules/shuffleArray";
import { useContext } from "react";
import { TriviaContext } from "../TriviaContext";
import { nanoid } from "nanoid";
import Button from "./Button";

export default function Trivia(props) {
  const { setTrivia } = useContext(TriviaContext);

  const selectAnswer = (id, qId) => {
    setTrivia((prev) => {
      return prev.map((element) => {
        return {
          ...element,
          answers: element.answers.map((answer) => {
            return answer.id === id
              ? { ...answer, isSelected: !answer.isSelected }
              : qId === element.qId
              ? { ...answer, isSelected: false }
              : {
                  ...answer,
                };
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
        isCorrect={element.isCorrect}
        id={element.id}
        qId={props.qId}
        selectAnswer={() => selectAnswer(element.id, props.qId)}
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
