import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout?: () => void; // Função de logout opcional
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyERP</Link>
      </div>
      <nav className="nav">
        <ul>
          {isLoggedIn ? (
            <>
              {/* Botão Logout */}
              <li>
                <button className="button-link" onClick={onLogout}>
                  Logout
                </button>
              </li>
              {/* Botão Ajuda */}
              <li>
                <Link to="/help" className="button-link primary">
                  Ajuda
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* Botão Login */}
              <li>
                <Link to="/login" className="button-link">
                  Login
                </Link>
              </li>
              {/* Botão Registre-se */}
              <li>
                <Link to="/register" className="button-link primary">
                  Registre-se
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
