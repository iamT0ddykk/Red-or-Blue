import { useState } from "react";
import { opcao } from "./opcao";
import "./styles/App.css";
import { Butao } from "./components/Butao";
import { Heading } from "./components/Header";

function App() {
  const [index, setIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [color, setColor] = useState("grey");

  const q1 = opcao[index].q1;
  const q2 = opcao[index].q2;

  function Click() {
    setIsDisabled(false);
  }

  function NextQ() {
    setIndex(index + 1);
    setIsDisabled(true);
    setColor("grey");
  }

  return (
    <>
      <Heading texto="O que voce prefere?"></Heading>

      <div className="questions">
        <div
          className="q1"
          onClick={() => {
            Click();
            setColor("#ef4444");
          }}
        >
          <div className="qContainer">{q1}</div>
        </div>
        <div
          className="q2"
          onClick={() => {
            Click();
            setColor("#3b82f6");
          }}
        >
          <div className="qContainer">{q2}</div>
        </div>
      </div>
      <div className="btn-area">
        <Butao
          disabled={isDisabled}
          texto="proxima"
          onClick={() => NextQ()}
          className="next-button"
          style={{ backgroundColor: color }}
        ></Butao>
      </div>
    </>
  );
}

export default App;
