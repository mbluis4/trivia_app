import "./index.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="start">
        <div className="blobs top"></div>
        <h1>Quizzical</h1>
        <p>Prove your general knowledge</p>
        <Link to="/quiz">
          <button className="btn">Start quiz</button>
        </Link>
      </div>

      {/*  {page1 && <Page1 resetGame={resetGame} />} */}
    </div>
  );
}

export default App;
