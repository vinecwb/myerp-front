import { FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionar
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Inclui cookies (se necessário)
      });

      if (!response.ok) {
        throw new Error("Falha ao fazer login");
      }

      const data = await response.json(); // Supondo que o backend retorna um token
      localStorage.setItem("token", data.token); // Salva o token no localStorage

      navigate("/main"); // Redireciona para o dashboard
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage("Credenciais inválidas. Tente novamente."); // Exibe mensagem de erro
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <FaLock className="icon" />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

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
  );
};

export default Login;
