import "./login.css";

export function LoginPage() {
  return (
    <>
      <div>
        <header>
          <h1>Fazer Login</h1>
          
        </header>
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

            <button type="submit"> Fazer Login </button>
          </form>
        </div>
      </div>
    </>
  );
}
