import { Butao } from "../../components/Butao";
import { Heading } from "../../components/Header";
import "./login.css";

export function LoginPage() {
  return (
    <>
      <div>
        <Heading texto="Fazer Login"></Heading>
        <div className="form-container">
          {" "}
          <form action="">
            <input
              type="text"
              maxLength={16}
              placeholder="Nome de Usuario"
              required
            />
            <input
              type="password"
              maxLength={16}
              placeholder="Senha"
              required
            />

            <Butao texto="Fazer Login" type="submit">
              {" "}
            </Butao>
          </form>
        </div>
      </div>
    </>
  );
}
