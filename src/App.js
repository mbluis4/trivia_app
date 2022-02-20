import { useState } from "react";
import "./index.css";
import Start from "./components/Start";
import Page1 from "./components/Page1";
import { TriviaProvider } from "./TriviaContext";

function App() {
  const [page1, setPage1] = useState(false);

  const startQuiz = () => {
    setPage1((prev) => !prev);
  };

  const resetGame = () => {
    setPage1(true);
  };
  return (
    <TriviaProvider>
      <div className="App">
        {!page1 && <Start startQuiz={startQuiz} />}
        {page1 && <Page1 resetGame={resetGame} />}
      </div>
    </TriviaProvider>
  );
}

export default App;
