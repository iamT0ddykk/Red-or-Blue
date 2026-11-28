import { Butao } from "../../components/Butao";
import { Heading } from "../../components/Heading";
import "./make.css";

export function MakeQuestion() {
  return (
    <>
      <div>
        <Heading texto="Fazer Questoes"></Heading>

        <div className="form-container">
          {" "}
          <form action="">
            <div className="question-container">
              <input
                type="text"
                maxLength={16}
                placeholder="opcao 1"
                required
                className="inpt-red"
              />
              <span>Ou</span>
              <input
                type="text"
                maxLength={16}
                placeholder="opcao 2"
                required
                className="inpt-blue"
              />
            </div>

            <Butao texto="Enviar Questao" type="submit">
              {" "}
            </Butao>
          </form>
        </div>
      </div>
    </>
  );
}
