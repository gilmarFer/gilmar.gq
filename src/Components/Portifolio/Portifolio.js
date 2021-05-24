import './Portifolio.css';
import ursulaCapa from '../../img/cards/ursula-capa.jpg';
import ursulaSquare from '../../img/cards/ursula-square.png';
import ursulaCircle from '../../img/cards/ursula-circle.png';
import SiteCard from '../SiteCard/SiteCard';
import barbershop from '../../img/cards/barbershop-capa.jpg';
import barbershopSquare from '../../img/cards/barbershop-square.png';
import barbershopCircle from '../../img/cards/barbershop-circle.png';
import pcdcdb from '../../img/cards/pcdcdb-capa.jpg';
import pcdcdbSquare from '../../img/cards/pcdcdb-square.png';
import pcdcdbCircle from '../../img/cards/pcdcdb-circle.png';

export default function Portifolio() {
  return (
    <>
      <div id="por-main">
        <h2 id="por-title">Portifólio</h2>
        <div id="por-cards">
          <SiteCard
            title="Salão Ursula Rillen"
            img={ursulaCapa}
            msg="Site ficticio criado para um salão de beleza!"
            tec="Criação da Logo, e toda a interface do usuario, com Illustrator.
            Criação do site com REACT JS usando os coneitos de flexbox e responsividade."
            square={ursulaSquare}
            circle={ursulaCircle}
            color="sd-btn-pink"
            link="https://gilmar.gq/ursula-rillen"
          />
          <SiteCard
            title="PCDCDB"
            img={pcdcdb}
            msg="PCDCDB - API com frases de para choque de caminhão"
            tec="API desenvolvida com NODE JS, Express, Cors, Sequelizer com banco de dados MySQL.
            Requisições get publicas e um CRUD completo com rotas fechadas."
            square={pcdcdbSquare}
            circle={pcdcdbCircle}
            color="sd-btn-blue"
            link="https://gilmar.gq/pcdcdb"
          />
          <SiteCard
            title="Barbershop"
            img={barbershop}
            msg="Site ficticio criado para uma barbearia!"
            tec="Layout desenvolvido com Illustrator. SAP desenvolvido com REACT JS
            usando os coneitos de flexbox e responsividade."
            square={barbershopSquare}
            circle={barbershopCircle}
            color="sd-btn-black"
            link="https://gilmar.gq/barbershop"
          />
        </div>
      </div>
    </>
  );
}
