import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyERP</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/login" className="button-link">Login</Link>
          </li>
          <li>
            <Link to="/register" className="button-link primary">Registre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
