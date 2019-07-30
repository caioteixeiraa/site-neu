import * as React from 'react';
import { Banner2 } from '../Assets/Components/banner2';
import { TimelineNEU } from '../Assets/Components/timelineNEU';
import { DescricaoPrograma } from '../Assets/Components/descricaoprograma';
import { Footer } from '../Assets/Components/footer';
import { ConteudoEbook } from '../Assets/Components/conteudo-ebook';

export class Ebook extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="">
        <Banner2 
        name="logoNEU-sec"
        descricao="O primeiro passo para empreender na universidade"
        linkbotao="https://docs.google.com/forms/d/e/1FAIpQLSedhl1S5beY2b4jFNWY3aklsfKZioKMqbJrAn6VgYfZ1qLdVg/viewform?c=0&w=1"
        conteudobotao="Baixar E-book" />
        <DescricaoPrograma 
        title="Guia de suporte aos alunos"
        subtitle="Primeiro passo para empreender"
        text={["Acompanhando de perto startups como 99, iFood e Nubank, o NEU preparou o ", <b>Guia de Suporte aos alunos</b>, ", um compilado de conhecimento e material para te ", <b>introduzir ao empreendedorismo</b>, ". O conteúdo é bem ", <b>leve e direto ao ponto</b>, ", sendo possível terminar de lê-lo em poucos minutos. ", <b>Baixe agora, é totalmente gratuito:</b>]}
        btnprimary="Baixar E-book"
        btnsecondary="Conteúdo"
        link_primeirobotao="https://docs.google.com/forms/d/e/1FAIpQLSedhl1S5beY2b4jFNWY3aklsfKZioKMqbJrAn6VgYfZ1qLdVg/viewform?c=0&w=1"
        link_segundobotao=""/>
        <ConteudoEbook />
        <Footer />
      </div>
    );
  }
}

export default Ebook;