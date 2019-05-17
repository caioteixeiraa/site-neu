import * as React from 'react';
import ReactDOM from 'react-dom';
import { Banner } from '../Assets/Components/banner';
import { Numbers } from '../Assets/Components/numbers';
import { Description } from '../Assets/Components/description';
import { Pillars } from '../Assets/Components/pillars';
import { CardSectionLeft } from '../Assets/Components/card_section_left';
import { CardSectionRight } from '../Assets/Components/card_section_right';
import { HowWorks } from '../Assets/Components/how_works';
import { StartupsLab } from '../Assets/Components/startups_lab';
import { StartupsShip } from '../Assets/Components/startups_ship';
import { HomeEbook } from '../Assets/Components/home_ebook';
import { HomeCursos } from '../Assets/Components/home_cursos';
import { HomeParceiros } from '../Assets/Components/home_parceiros';
import { Banner2 } from '../Assets/Components/banner2';
import { DescricaoPrograma } from '../Assets/Components/descricaoprograma';
import { Footer } from '../Assets/Components/footer';
import InfiniteCarousel from 'react-leaf-carousel';
import LogoMVISIA from '../Assets/img/logos-startups/logo-mvisia.svg';
import LogoMobly from '../Assets/img/logos-startups/logo-mobly.svg';
import LogoIngresse from '../Assets/img/logos-startups/ingresse-06.svg';
import Slider from 'react-slick';

export class StartupShipPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="">
        <Banner2 />
        <DescricaoPrograma />
        <Numbers 
        numero1="+30"
        descricao1_1="Vagas fechadas"
        descricao1_2="(desde 2018)"
        numero2="+100"
        descricao2_1="Startups"
        descricao2_2="parceiras"
        numero3="+15k"
        descricao3_1="Alunos"
        descricao3_2="impactados"
        numero4="+300"
        descricao4_1="Currículos"
        descricao4_2="no banco" />
        
      </div>
    );
  }
}

export default StartupShipPage;