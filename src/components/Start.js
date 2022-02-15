export default function Start(props) {
  return (
    <div className="start">
      <div className="blobs top"></div>
      <h1>Quizzical</h1>
      <p>Prove your general knowledge</p>
      <button className="btn" onClick={props.startQuiz}>
        Start quiz
      </button>
      <div className="blobs bottom"></div>
    </div>
  );
}
