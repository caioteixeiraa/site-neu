import * as React from 'react';
import {Banner2} from '../Assets/Components/banner2';
import {DescricaoPrograma} from '../Assets/Components/descricaoprograma';
import { Numbers } from '../Assets/Components/numbers';
import { SecaoIcones } from '../Assets/Components/secao_icones';
import { LabCases } from '../Assets/Components/lab_cases';
import { ComoFuncionaLab } from '../Assets/Components/como_funciona_lab';
import {Footer} from '../Assets/Components/footer';

export class StartupLabPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="">
        <Banner2 
        name="logo-lab"
        descricao="O programa de pré-aceleração de startups aos alunos e alunas USP"
        linkbotao="http://bit.ly/typeformLab"
        conteudobotao="Inscrever-me" />/>
        <DescricaoPrograma 
        title="Pré-aceleração"
        subtitle="Tem uma ideia e quer empreender?"
        text={["O StartupLAB é o programa de ", <b>pré-aceleração </b>,"e apoio a startups emergentes da USP. ", <b>Se você tem uma ideia e quer transformá-la em um negócio</b>,", ajudamos em toda sua jornada, com materiais selecionados e ", <b>mentorias exclusivas do time NEU</b>, ". Para você, que já empreende, temos as mentorias específicas com empreendedores, para você ", <b>entender mais do seu mercado </b>, "ou ", <b>conversar com especialistas em tecnologia</b>, "."]}
        btnprimary="Inscrever-se"
        btnsecondary="Quero ser mentor"
        link_primeirobotao="http://bit.ly/typeformLab"
        link_segundobotao=""/>
        <Numbers 
        numero1="+40h"
        descricao1_1="De mentoria"
        descricao1_2="e materiais"
        numero2="+100"
        descricao2_1="Startups"
        descricao2_2="parceiras"
        numero3="+15k"
        descricao3_1="Alunos"
        descricao3_2="impactados"
        numero4="+10"
        descricao4_1="Startups"
        descricao4_2="criadas" />       
        <SecaoIcones
        tituloh2="Como funciona?"
        icone_1="happiness"
        subtituloh4_1="Mentoria"
        texto_1="Mentores dedicados para ajudar você a saber mais sobre o mercado, conversar com seus usuários e validar seu modelo de negócios"
        icone_2="notebook"
        subtituloh4_2="Conteúdo"
        texto_2="Acesso a uma curadoria de conteúdos usados por grandes startups, palestras , talks e bate-papos com fundadores das startups da Rede NEU"
        icone_3="network"
        subtituloh4_3="Conexão"
        texto_3="Depois de pré-acelerado, seja conectado com aceleradoras, investidores, fundos de investimento e outros agentes do ecossistema" />
        <LabCases />
        <ComoFuncionaLab />
        <Footer />
      </div>
    );
  }
}

export default StartupLabPage;