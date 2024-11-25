import React from "react";
import "./Home.css"; 

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Organize sua empresa em um só lugar</h1>
          <p>
            Gerencie todo o seu negócio e economize tempo com nossa solução de sistema integrado.
          </p>
          <p> Cadastre clientes, fornecedores, gerencie seu estoque, gere relatórios e emita notas fiscais com agilidade.</p>
          <div className="cta-container">
            <button className="cta-button">Experimente grátis</button>
            <a href="#planos" className="cta-link">
              Ver planos
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/assets/hero-image.jpg" alt="Hero" />
        </div>
      </section>

      <section className="features">
        <h2>Por que escolher nosso sistema?</h2>
        <div className="features-grid">
          <div className="feature">
            <img src="/assets/icon1.png" alt="Icone 1" />
            <h3>Fácil de usar</h3>
            <p>Nossa interface é intuitiva e acessível para todos.</p>
          </div>
          <div className="feature">
            <img src="/assets/icon2.png" alt="Icone 2" />
            <h3>Automatização</h3>
            <p>Automatize tarefas e economize tempo no dia a dia.</p>
          </div>
          <div className="feature">
            <img src="/assets/icon3.png" alt="Icone 3" />
            <h3>Suporte dedicado</h3>
            <p>
              Nossa equipe está pronta para ajudar sempre que você precisar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
