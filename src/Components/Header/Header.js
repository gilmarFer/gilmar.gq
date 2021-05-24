import './Header.css';
import logo from '../../img/i.svg';
import i from '../../img/i.jpg';
import bg from '../../img/bg.jpg';

export default function Header() {
  return (
    <>
      <div id="header-main">
        <img id="header-bg" src={bg} alt="background" />
        <div id="header-container">
          <div id="header-center">
            <img src={i} alt="i" />
            <h5 id="header-title">Gilmar Fernandes</h5>
            <h1>Desenvolvedor Web, estudante e atleta.</h1>
            <h6>Desenvolvedor de sistemas web, APIs, landing pages, SPAs e um pouco de UI/UX.</h6>
            <h6>Estudante de Javascrit, React, Node, Mysql, MongoDB, Express, Sequelize...</h6>
            <h6>E atleta com uma media de corrida de 120 KM/ Mes</h6>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/fernandes-gilmar/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="mailto:gilmar.aquino@live.com" target="_blank" rel="noreferrer">
                  <i className="far fa-envelope" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gilmar.fer/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://github.com/gilmarFer" target="_blank" rel="noreferrer">
                  <i className="fab fa-github" />
                </a>
              </li>
            </ul>
            <a href="#contact-main">
              <button type="button">
                Contato
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
