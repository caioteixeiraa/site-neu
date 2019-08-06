import * as React from 'react';
import { Banner3 } from '../Assets/Components/banner3';
import { EventosNEU } from '../Assets/Components/eventos-neu';
import { Evento } from '../Assets/Components/evento';
import { Footer } from '../Assets/Components/footer';
import { Numbers } from '../Assets/Components/numbers';
import {AreasPiratas} from '../Assets/Components/areas-piratas';
import { StartupsPiratas } from '../Assets/Components/startups-piratas';
import { SecaoIcones } from '../Assets/Components/secao_icones';

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
        logo="Logo-piratas.svg" />
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
          <StartupsPiratas />
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
        
        
        
        
        <Evento
        nomeEvento="SER Empreendedor"
        subtitulo="Competição de Modelos de Negócios"
        descricao={["O Treinamento de Novos Piratas é um curso presencial para alunos USP e completamente ", <b>gratuito</b>, ". Ele é ministrado por profissionais de diversas startups, com o objetivo de ", <b>desenvolver as hard skills</b>, " necessárias para trabalhar em uma área dentro de uma startup. O Treinamento abrange três áreas distintas: ", <b>UX e Design, Marketing Performance e Ciência dos Dados.</b>]}
        logo="Logo-piratas.svg" />
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
          <StartupsPiratas />
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




          <Evento
                  nomeEvento="Hack USP"
                  subtitulo="Maratona de Programação e Desenvolvimento"
                  descricao={["O Treinamento de Novos Piratas é um curso presencial para alunos USP e completamente ", <b>gratuito</b>, ". Ele é ministrado por profissionais de diversas startups, com o objetivo de ", <b>desenvolver as hard skills</b>, " necessárias para trabalhar em uma área dentro de uma startup. O Treinamento abrange três áreas distintas: ", <b>UX e Design, Marketing Performance e Ciência dos Dados.</b>]}
                  logo="Logo-piratas.svg" />
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
                    <StartupsPiratas />
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
        <Footer />
      </div>
    );
  }
}

export default Eventos;
