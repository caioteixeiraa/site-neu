import * as React from 'react';
import { BannerEbook } from '../Assets/Components/bannerEbook';
import { TimelineNEU } from '../Assets/Components/timelineNEU';
import { DescricaoPrograma } from '../Assets/Components/descricaoprograma';
import { Footer } from '../Assets/Components/footer';
import { ConteudoEbook } from '../Assets/Components/conteudo-ebook';
import { CTA } from '../Assets/Components/botao-cta';
import ScrollUpButton from 'react-scroll-up-button';


export class Ebook extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="">
        <ScrollUpButton />
        <BannerEbook />
        <DescricaoPrograma 
        title="Guia de suporte aos alunos"
        subtitle="Primeiro passo para empreender"
        text={["Acompanhando de perto startups como 99, iFood e Nubank, o NEU preparou o ", <b>Guia de Suporte aos alunos</b>, ", um compilado de conhecimento e material para te ", <b>introduzir ao empreendedorismo</b>, ". O conteúdo é bem ", <b>leve e direto ao ponto</b>, ", sendo possível terminar de lê-lo em poucos minutos. ", <b>Baixe agora, é totalmente gratuito:</b>]}
        btnprimary="Baixar E-book"
        btnsecondary="Conteúdo"
        link_primeirobotao="https://docs.google.com/forms/d/e/1FAIpQLSedhl1S5beY2b4jFNWY3aklsfKZioKMqbJrAn6VgYfZ1qLdVg/viewform?c=0&w=1"
        link_segundobotao=""/>
        <ConteudoEbook />
        <CTA
        texto="Baixar E-book"
        href="#" />
        <Footer />
      </div>
    );
  }
}

export default Ebook;