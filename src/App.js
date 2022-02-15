import { useState } from "react";
import "./index.css";
import Start from "./components/Start";
import Page1 from "./components/Page1";

function App() {
  const [page1, setPage1] = useState(false);

  const startQuiz = () => {
    setPage1((prev) => !prev);
  };
  return (
    <div className="App">
      {!page1 && <Start startQuiz={startQuiz} />}
      {page1 && <Page1 />}
    </div>
  );
}

export default App;
