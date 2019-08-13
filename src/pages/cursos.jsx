import * as React from 'react';
import { Footer } from '../Assets/Components/footer';
import { BannerCursos } from '../Assets/Components/banner-cursos';
import { DescricaoCursos } from '../Assets/Components/descricao-cursos';
import { Curso } from '../Assets/Components/curso';
import { StartupsPiratas } from '../Assets/Components/startups-piratas';
import { Startups3 } from '../Assets/Components/startups3';

export class Cursos extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="">
        <BannerCursos />
        <DescricaoCursos />
        <Curso
        nome="Criação de Startups"
        foto="foto-inova.jpg"
        descricao={["Curso introdutório de Criação de Startups, composto por aulas teóricas sobre ", <b>Customer Development</b>, " e ", <b>Lean Startup</b>, ", e aulas práticas com empreendedores das ", <b>maiores startups</b>, "."]}
        link="https://www.coursera.org/learn/criacao-startups" />
        <StartupsPiratas
          logo1="logo-99--black-yellow.svg"
          logo2="caos_focado.png"
          logo3="nubank-05.svg"
          logo4="Lean-survey.jpg" />


        <Curso
        nome="Marketing Digital"
        foto="foto-inova.jpg"
        descricao={["Aprenda a desenvolver a estratégia de marketing digital para sua empresa ou startup. Nesse curso você irá aprender sobre os principais pontos de Marketing como  ", <b>ROI, SEO, SEM, Testes AB e funil de conversão.</b>]}
        link="https://www.coursera.org/learn/estrategia-marketing-digital?" />
        <Startups3
          logo1="logo-revelo.svg"
          logo2="logo-ingresse.png"
          logo3="logo-uber.png" />



        <Curso
        nome="UX/UI Design"
        foto="foto-inova.jpg"
        descricao={["Aprenda com a Taqtile sobre como criar a ", <b>melhor experiência para o seu usuário</b>, ", princípios básicos de Design e como desenvolver ", <b>interfaces de aplicativos e sites.</b>]}
        link="https://www.coursera.org/learn/ux-ui-design-de-interface?" />
        <Startups3
          logo1="taqtile-quadrado.png"
          logo2="logo-conectcar.png"
          logo3="logo-everis.png" />


        
        <Curso
        nome="Estrutura Jurídica e Financeira"
        foto="foto-inova.jpg"
        descricao={["Aprenda como oficializar sua empresa. Entenda como  ", <b>conseguir um CNPJ, oficializar sociedade e as minúcias de capital SA, LTDA e EIRELI, e muito mais.</b>]}
        link="https://www.coursera.org/learn/consolidando-empresas?" />
        <Startups3
          logo1="logo-baptista.png"
          logo2="logo-verticore.png"
          logo3="logo-neu (1).png" />




        <Curso
        nome="Marketing e Vendas B2B"
        foto="foto-inova.jpg"
        descricao={["Aprenda a aumentar as vendas em negócios B2B com técnicas e estratégias de Marketing. Neste curso serão abordados temas como: ", <b>leads, conversão, Inbound e Outbound, como vender e fidelização.</b>]}
        link="https://www.coursera.org/learn/criacao-startups" />
        <StartupsPiratas
          logo1="Lean-survey.jpg"
          logo2="colab-logo.png"
          logo3="logo-looqbox.svg"
          logo4="Oxiot_logo.png" />




        <Curso
        nome="Crescimento de empresas"
        foto="foto-inova.jpg"
        descricao={["Neste curso você irá entender mais sobre como escalar, como criar e manter a cultura, como ser um líder, como gerir e contratar equipes, como desenvolver produtos ", <b>e como cuidar da operação da sua empresa.</b>]}
        link="https://www.coursera.org/learn/criacao-startups" />
        <StartupsPiratas
          logo1="playax.png"
          logo2="beleza na web.svg"
          logo3="logo-revelo.svg"
          logo4="logo-uplexis.png" />

        <Footer />
      </div>
    );
  }
}

export default Cursos;