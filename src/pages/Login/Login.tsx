import { FaLock, FaUser } from "react-icons/fa";

import { useState } from "react";
import "./Login.css";


const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-field">
          <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar-me
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>


        <button type="submit">Entrar</button>


        <div className="register">
          <p>Não tem uma conta?</p>
          <a href="/register">Registre-se</a>
        </div>
      </form>
    </div>
  )
}
export default Login;
