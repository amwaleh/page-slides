import React from "react";
import ReactDOM from "react-dom";
import Slide from "./onboard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 />
      <h2>f</h2>
      {Slide}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
