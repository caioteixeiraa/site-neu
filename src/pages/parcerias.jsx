import * as React from 'react';
import { Banner4 } from '../Assets/Components/banner4';
import { EventosNEU } from '../Assets/Components/eventos-neu';
import { Evento } from '../Assets/Components/evento';
import { Footer } from '../Assets/Components/footer';
import { Numbers } from '../Assets/Components/numbers';
import {AreasPiratas} from '../Assets/Components/areas-piratas';
import { StartupsPiratas } from '../Assets/Components/startups-piratas';
import { SecaoIcones } from '../Assets/Components/secao_icones';
import { DescricaoPrograma } from '../Assets/Components/descricaoprograma';
import ScrollUpButton from 'react-scroll-up-button';
import { HomeParceiros } from '../Assets/Components/home_parceiros';
import { StartupsParceiras } from '../Assets/Components/startups_parceiras';

export class Parcerias extends React.Component {
  render() {
    return (
      <div className="">
      <ScrollUpButton />
        <Banner4 />
        <DescricaoPrograma
        title="Parcerias"
        subtitle="Pessoas e Startups que apoiam o NEU"
        text={["Para ajudar no fomento do empreendedorismo, nós temos a nossa ", <b>Rede NEU</b>,". Essa rede tem como foco auxiliar as startups que estão presentes nela, com conexões entre si mediadas pelo próprio NEU. Algumas empresas também ajudam o NEU financeiramente para que os nosso eventos e programas possam acontecer. "]} 
        btnprimary="Quero fazer parte"
        btnsecondary="Quero ajudar o NEU"
        link_primeirobotao=""
        link_segundobotao="" />
            <SecaoIcones 
              tituloh2="O que é a Rede NEU"
              icone_1="recycle"
              subtituloh4_1="Reciprocidade indireta"
              texto_1="Local para trocar experiências e encontrar pessoas para ajudar você e sua empresa."
              icone_2="lightbulb"
              subtituloh4_2="Autonomia criativa"
              texto_2="Ambiente para compartilhar e ter suporte sempre que necessário."
              icone_3="talk"
              subtituloh4_3="Papo de startup para startup"
              texto_3="Papos sobre empreendedorismo e uma rede para tirar dúvidas e saber mais sobre outras empresas."/>
        <HomeParceiros />
        <StartupsParceiras />
        
        <Footer />
      </div>
    );
  }
}

export default Parcerias;