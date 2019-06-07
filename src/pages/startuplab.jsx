import * as React from 'react';
import ReactDOM from 'react-dom';
import {Banner2} from '../Assets/Components/banner2';
import {DescricaoPrograma} from '../Assets/Components/descricaoprograma';
import {Footer} from '../Assets/Components/footer';

export class StartupLabPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="">
        <Banner2 name="logo-lab"/>
        <DescricaoPrograma 
        title="Pré-aceleração"
        subtitle="Tem uma ideia e quer empreender?"
        text={["O StartupLAB é o programa de ", <b>pré-aceleração </b>,"e apoio a startups emergentes da USP. ", <b>Se você tem uma ideia e quer transformá-laem um negócio</b>,", ajudamos em toda sua jornada, com materiais selecionados e ", <b>mentorias exclusivas do time NEU</b>, ". Para você, que já empreende, temos as mentorias específicas com empreendedores, para você ", <b>entender mais do seu mercado </b>, "ou ", <b>conversar com especialistas em tecnologia</b>, "."]}
        btnprimary="Inscrever-se"
        btnsecondary="Quero ser mentor"
        link_primeirobotao=""
        link_segundobotao=""/>
        <Footer />
      </div>
    );
  }
}

export default StartupLabPage;