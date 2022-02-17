//import shuffleArray from "./modules/shuffleArray";
import { nanoid } from "nanoid";
import Button from "./Button";

export default function Trivia(props) {
  const buttonsComp = props.answers.map((element) => {
    return <Button answer={element.answer} key={nanoid()} id={element.id} />;
  });

  return (
    <div className="trivia">
      <h2 className="question">{props.question}</h2>
      <div className="buttons">{buttonsComp}</div>
    </div>
  );
}
