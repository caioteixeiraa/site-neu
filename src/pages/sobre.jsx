import * as React from 'react';
import { Banner2 } from '../Assets/Components/banner2';
import { DescricaoPrograma } from '../Assets/Components/descricaoprograma';
import { TimelineNEU } from '../Assets/Components/timelineNEU';
import { Footer } from '../Assets/Components/footer';

export class SobreNEU extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="">
        <Banner2 
        name="logoNEU-sec"
        descricao="Fomentando a cultura de empreendedorismo na Universidade"
        linkbotao="#"
        conteudobotao="Quero apoiar o NEU" />
        <DescricaoPrograma 
        title="Sobre o NEU"
        subtitle="A organização"
        text={["O NEU (Núcleo de Empreendedorismo da USP) é uma ", <b>organização sem fins lucrativos </b>, ", formada por alunos com apoio de pesquisadores e professores movidos por uma missão: ", <b>fomentar a cultura de empreendedorismo na Universidade de São Paulo</b>]}
        btnprimary="Quero apoiar o NEU"
        btnsecondary="Fale conosco"
        link_primeirobotao=""
        link_segundobotao=""/>
        <TimelineNEU />
        <Footer />
      </div>
    );
  }
}

export default SobreNEU;