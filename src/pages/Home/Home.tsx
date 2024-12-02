import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Organize sua empresa em um só lugar</h1>
          <p>
            Gerencie todo o seu negócio e economize tempo com nossa solução de
            sistema integrado.
          </p>
          <p>
            {" "}
            Cadastre clientes, fornecedores, gerencie seu estoque, gere
            relatórios e emita notas fiscais com agilidade.
          </p>
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
            <img src="/assets/taxa.png" alt="Icone 1" />
            <h3>Fácil de usar</h3>
            <p>Gere notas fiscais para os seus pedidos.</p>
          </div>
          <div className="feature">
            <img src="/assets/cadastro.png" alt="Icone 2" />
            <h3>Automatização</h3>
            <p>Automatize tarefas e economize tempo no dia a dia.</p>
          </div>
          <div className="feature">
            <img src="/assets/suporte.png" alt="Icone 3" />
            <h3>Suporte dedicado</h3>
            <p>
              Nossa equipe está pronta para ajudar sempre que você precisar.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Conheça mais sobre nosso produto</h2>
        <p>
          Nosso sistema é a solução ideal para pequenas e médias empresas que
          buscam eficiência e praticidade. Criado com tecnologia moderna, ele se
          adapta às suas necessidades e ajuda você a tomar decisões mais
          assertivas.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="about-left">
            <ul>
              <li>✔️ Interface amigável e intuitiva</li>
              <li>✔️ Segurança e privacidade garantidas</li>
              <li>✔️ Atualizações constantes e suporte ágil</li>
            </ul>
          </div>
          <div className="about-right">
            <img
              src="/assets/about-product.jpg"
              alt="Sobre o produto"
              className="about-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
