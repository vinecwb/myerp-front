import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import Header from "../../components/Header/Header";

const Main = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover token ou qualquer outra informação relacionada ao login
    localStorage.removeItem("token");

    // Redirecionar para a tela de login
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <Header isLoggedIn={true} onLogout={handleLogout} />
      {/* Quadrante Superior Esquerdo */}
      <div className="dashboard-top-left">
        <button className="btn">Adicionar Cliente</button>
        <button className="btn">Gerar Relatório</button>
        <button className="btn">Atualizar Cliente</button>
        <button className="btn btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Quadrante Superior Direito */}
      <div className="dashboard-top-right">
        <h2>Informações Adicionais</h2>
      </div>

      {/* Quadrante Inferior Esquerdo */}
      <div className="dashboard-bottom-left">
        <h2>Estatísticas</h2>
      </div>

      {/* Quadrante Inferior Direito */}
      <div className="dashboard-bottom-right">
        <h2>Configurações</h2>
      </div>
    </div>
  );
};

export default Main;
