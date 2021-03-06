import * as React from 'react';
import ReactDOM from 'react-dom';
import { Numbers } from '../Assets/Components/numbers';
import { Banner2 } from '../Assets/Components/banner2';
import { BannerShip } from '../Assets/Components/banner-ship';
import { DescricaoPrograma } from '../Assets/Components/descricaoprograma';
import { CarrosselStartups } from '../Assets/Components/carrossel_startups';
import { SecaoIcones } from '../Assets/Components/secao_icones';
import { ComoFuncionaShip } from '../Assets/Components/como_funciona_ship';
import { SecaoDepoimentos } from '../Assets/Components/secao_depoimentos';
import ScrollUpButton from 'react-scroll-up-button';
import { Footer } from '../Assets/Components/footer';

export class StartupShipPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="">
        <ScrollUpButton />
        <BannerShip 
        name="logo-ship"
        descricao="Conexão de alunos USP a vagas de estágio em startups"
        linkbotao="http://bit.ly/quero_estagiar_em_uma_startup"
        conteudobotao="Quero estagiar" />
        <DescricaoPrograma 
        title="Estágios em Startups"
        subtitle="Quer estagiar em uma startup?"
         text={["O StartupSHIP é o programa de ", <b>conexão de alunos USP com as startups da nossa Rede</b>,". Temos como objetivo inserir alunos no ecossistema de empreendedorismo para que adquiram ", <b>muito aprendizado em um ambiente de autonomia</b>,". Se você é de uma startup e tem uma vaga de estágio, entre em contato conosco:"]} 
        btnprimary="Quero estagiar"
        btnsecondary="Tenho uma vaga"
        link_primeirobotao="http://bit.ly/quero_estagiar_em_uma_startup"
        link_segundobotao="http://bit.ly/procuro_talentos_USP" />
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
        <SecaoIcones
        tituloh2="Por que estagiar em uma startup?"
        icone_1="happiness"
        subtituloh4_1="Ambiente de aprendizado"
        texto_1="O trabalho em uma startup irá te proporcionar um aprendizado inigualável! Você vai sentir que está fazendo a diferença dentro da empresa!" 
        icone_2="working-briefcase"
        subtituloh4_2="Oportunidade de crescer na empresa"
        texto_2="Trabalhar numa startup é vê-la crescer e saber que você está crescendo exponencialemnte assim como ela."
        icone_3="like"
        subtituloh4_3="Descontração e mão na massa"
        texto_3="O ambiente de uma startup é muitas vezes descontraído, dando prioridade para que seus funcionários se sintam confortáveis."/>
        <ComoFuncionaShip />
        <SecaoDepoimentos />
        <Footer />
      </div>
    );
  }
}

export default StartupShipPage;