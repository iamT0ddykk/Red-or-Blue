import { useState } from "react";
import { opcao } from "./opcao";
import "./styles/App.css";
import { Butao } from "./components/Butao";
import { Heading } from "./components/Heading";

function App() {
  const [index, setIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const q1 = opcao[index].q1;
  const q2 = opcao[index].q2;

  function Click() {
    setIsDisabled(false);
  }

  function NextQ() {
    setIndex(index + 1);
    setIsDisabled(true);
  }

  return (
    <>
      <Heading texto="O que voce prefere?"></Heading>

      <div className="questions">
        <div className="q1" onClick={() => Click()}>
          <div className="qContainer">{q1}</div>
        </div>
        <div className="q2" onClick={() => Click()}>
          <div className="qContainer">{q2}</div>
        </div>
      </div>

      <Butao
        disabled={isDisabled}
        texto="proxima"
        onClick={() => NextQ()}
      ></Butao>
    </>
  );
}

export default App;
