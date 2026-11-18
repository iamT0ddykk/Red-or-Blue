import { useState } from "react";
import { Questions } from "./components/Questions";
import { opcao } from "./opcao";
import "./styles/App.css";
import { Butao } from "./components/Butao";

function App() {
  const [index, setIndex] = useState(0);

  const q1 = opcao[index].q1;
  const q2 = opcao[index].q2;

  return (
    <>
      <header>
        <h1>Oque você prefere?</h1>
      </header>

      <Questions q1={q1} q2={q2}></Questions>

      <Butao texto="proxima" onClick={() => setIndex(index + 1)}></Butao>
    </>
  );
}

export default App;
