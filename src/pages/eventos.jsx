import * as React from 'react';
import { Banner3 } from '../Assets/Components/banner3';
import { EventosNEU } from '../Assets/Components/eventos-neu';
import { Evento } from '../Assets/Components/evento';
import { Footer } from '../Assets/Components/footer';
import { Numbers } from '../Assets/Components/numbers';
import {AreasPiratas} from '../Assets/Components/areas-piratas';
import { StartupsPiratas } from '../Assets/Components/startups-piratas';
import { SecaoIcones } from '../Assets/Components/secao_icones';
import { CTA } from '../Assets/Components/botao-cta';

export class Eventos extends React.Component {
  render() {
    return (
      <div className="">
        <Banner3 />
        <EventosNEU />
        <Evento
        nomeEvento="Treinamento de Novos Piratas"
        subtitulo="Curso gratuito presencial para alunos USP"
        descricao={["O Treinamento de Novos Piratas é um curso presencial para alunos USP e completamente ", <b>gratuito</b>, ". Ele é ministrado por profissionais de diversas startups, com o objetivo de ", <b>desenvolver as hard skills</b>, " necessárias para trabalhar em uma área dentro de uma startup. O Treinamento abrange três áreas distintas: ", <b>UX e Design, Marketing Performance e Ciência dos Dados.</b>]}
        logo="Logo-piratas.png"
        href="" />
        <Numbers
              numero1="24h"
              descricao1_1="De aulas"
              descricao1_2="e materiais"
              numero2="+40"
              descricao2_1="Startups"
              descricao2_2="parceiras"
              numero3="+1000"
              descricao3_1="Alunos"
              descricao3_2="impactados"
              numero4="+200"
              descricao4_1="Alunos"
              descricao4_2="formados" />
          <AreasPiratas />
          <StartupsPiratas
              logo1="taqtile-quadrado.png"
              logo2="nubank-05.svg"
              logo3="logo-ingresse.png"
              logo4="logo-mobly.svg" />
          <SecaoIcones 
              tituloh2="O que oferecemos?"
              icone_1="megaphone"
              subtituloh4_1="Palestras"
              texto_1="No primeiro sábado, os alunos recebem uma série de palestras para ter um primeiro contato com startups, como é trabalhar nelas e dicas de currículo"
              icone_2="notebook"
              subtituloh4_2="Conteúdo das Startups"
              texto_2="Os cursos são desenvolvidos por Startups e ministrados por elas, dando um panorama dos desafios e ferramentas que as Startups entram em contato diariamente"
              icone_3="like"
              subtituloh4_3="Entregas"
              texto_3="Cada curso possui suas entregas específicas e, ao final do curso, os alunos terão projetos para colocar em seus currículos e/ou portfólios"/>
          <CTA texto="Inscrever-me"
          href=""/>
        
        
        
        <Evento
        nomeEvento="SER Empreendedor"
        subtitulo="Competição de Modelos de Negócios"
        descricao={["O Ser Empreendedor é uma ", <b>jornada imersiva</b>, ", com duração aproximada de ", <b>um mês</b>, " na qual as equipes desenvolvem sua ideia de neǵocio, sendo capacitadas ao longo da trajetória, e competindo por uma ", <b>premiação ao final.</b>, " O objetivo do SER é ", <b>fomentar o empreendedorismo dentro das universidades</b>, " e capacitando os alunos a empreenderem."]}
        logo="SER_LOGO.png"
        href="" />
        <Numbers
              numero1="20h"
              descricao1_1="De aulas"
              descricao1_2="e materiais"
              numero2="+10"
              descricao2_1="Startups"
              descricao2_2="parceiras"
              numero3="+1000"
              descricao3_1="Alunos"
              descricao3_2="impactados"
              numero4="+50"
              descricao4_1="Alunos"
              descricao4_2="participantes" />
          <SecaoIcones 
              tituloh2="O que oferecemos?"
              icone_1="happiness"
              subtituloh4_1="Mentoria"
              texto_1="O time NEU, junto a profissionais de startups, organiza mentorias de Canvas e MVP durante a competição para preparar os alunos e alunas em cada etapa da competição."
              icone_2="video"
              subtituloh4_2="Webinar"
              texto_2="Nós também organizamos webinars, com convidados, para ajudar os alunos e alunas a aprenderem e tirarem dúvidas sobre modelagem de negócios."
              icone_3="education"
              subtituloh4_3="Pitch final"
              texto_3="Os projetos selecionados para a fase final, terão a oportunidade de apresentar um pitch para uma banca de jurados renomados no ecossistema de startups."/>
          <StartupsPiratas
          logo1="logo-getninjas.png"
          logo2="logo-idwall.svg"
          logo3="logo-baptista.png"
          logo4="logo-tfg.png" />
          <CTA texto="Inscrever-me"
          href="#"/>



          <Evento
                  nomeEvento="Hack USP"
                  subtitulo="Maratona de Programação e Desenvolvimento"
                  descricao={["O Hack USP é a ", <b>maratona de programação </b>, " organizada pelo NEU para os alunos e alunas da USP desenvolverem ", <b>soluções inovadoras de tecnologia que tenham impacto na sociedade</b>, ". Engajando alunos, ex-alunos recém-graduados e pesquisadores a criarem soluções tecnológicas sobre o tema da edição."]}
                  logo="Logo_Hack.png"
                  href="" />
                  <Numbers
                        numero1="30h"
                        descricao1_1="De conteúdo"
                        descricao1_2="e competição"
                        numero2="+100"
                        descricao2_1="Startups"
                        descricao2_2="parceiras"
                        numero3="+300"
                        descricao3_1="Alunos"
                        descricao3_2="já participaram"
                        numero4="+10"
                        descricao4_1="Equipes que"
                        descricao4_2="formaram startups" />
                    <SecaoIcones 
                        tituloh2="O que oferecemos?"
                        icone_1="speech"
                        subtituloh4_1="Pré-evento"
                        texto_1="Um dia antes da competição, organizamos um pré-evento de aquecimento onde oferecemos conteúdo sobre o tema e dicas para a maratona do dia seguinte."
                        icone_2="happiness"
                        subtituloh4_2="Mentoria"
                        texto_2="Durante a competição, o time NEU, juntamente com profissionais de startups oferecem mentorias sobre software, hardware, design e negócios."
                        icone_3="placeholder-outline"
                        subtituloh4_3="Infraestrutura"
                        texto_3="Oferecemos infraestrutura para descanso, alimentação, internet e mesas e cadeiras para programar. Tudo gratuitamente!"/>
                    <StartupsPiratas
                    logo1="logo-mvisia.svg"
                    logo2="logo-stone.png"
                    logo3="beleza na web.svg"
                    logo4="logo-espresso.png" />
                    <CTA texto="Inscrever-me"
                    href="#"/>
        <Footer />
      </div>
    );
  }
}

export default Eventos;
