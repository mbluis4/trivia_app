import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Quiz from "./components/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TriviaProvider } from "./TriviaContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TriviaProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </TriviaProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
