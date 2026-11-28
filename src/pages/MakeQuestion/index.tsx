import { useState } from "react";
import { Butao } from "../../components/Butao";
import { Heading } from "../../components/Header";
import "./make.css";

export function MakeQuestion() {
  const [sub, setSub] = useState(true);

  return (
    <>
      {sub && (
        <div>
          <Heading texto="Fazer Questoes"></Heading>

          <div className="form-container">
            {" "}
            <form action="">
              <div className="question-container">
                <input
                  type="text"
                  maxLength={32}
                  placeholder="opcao 1"
                  required
                  className="inpt-red"
                />
                <span>Ou</span>
                <input
                  type="text"
                  maxLength={32}
                  placeholder="opcao 2"
                  required
                  className="inpt-blue"
                />
              </div>

              <Butao
                texto="Enviar Questao"
                type="submit"
                onClick={() => setSub(false)}
              >
                {" "}
              </Butao>
            </form>
          </div>
        </div>
      )}

      {!sub && (
        <div>
          <Heading texto="Fazer Questoes"></Heading>
          <div className="succes-text">
            {" "}
            <h1>Questao eviada com sucesso ✅</h1>
            <h2>
              A questão enviada por você será avaliada antes de ser publicada.
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
