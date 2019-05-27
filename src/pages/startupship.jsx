import * as React from 'react';
import ReactDOM from 'react-dom';
import { Numbers } from '../Assets/Components/numbers';
import { Banner2 } from '../Assets/Components/banner2';
import { DescricaoPrograma } from '../Assets/Components/descricaoprograma';
import { CarrosselStartups } from '../Assets/Components/carrossel_startups';
import { SecaoIcones } from '../Assets/Components/secao_icones';
import { Footer } from '../Assets/Components/footer';
import LogoMVISIA from '../Assets/img/logos-startups/logo-mvisia.svg';
import LogoMobly from '../Assets/img/logos-startups/logo-mobly.svg';
import LogoIngresse from '../Assets/img/logos-startups/ingresse-06.svg';

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
        <CarrosselStartups />
        <SecaoIcones />
        <Footer />
      </div>
    );
  }
}

export default StartupShipPage;