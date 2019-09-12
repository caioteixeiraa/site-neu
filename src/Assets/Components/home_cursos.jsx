import * as React from 'react';
import './home_cursos.css'
import LogoUSP from '../img/usp-1-logo-svg-vector.svg';
import LogoPRP from '../img/PRP.png';
import { Numbers } from './numbers';
import { HomeCurso } from './home_rect_curso';

export class HomeCursos extends React.Component{
    render() {
        return (
            <div className="container" id="cursos-section">
                <h1 className="titulo textos-cursos">Cursos Online</h1>
                <div className="alinha-centro row">
                <div className="col-md-6 col-12 offset-0 offset-md-0">
                    <p className="texto-cursos">Produzidos pelo NEU, em parceria com a Pró-Reitoria de Pesquisa a USP, e diversas startups
                    e agentes do ecossistema de empreendedorismo têm como propósito direcionar todas as ferramentas práticas 
                    específicas para cada área.</p>
                </div>
                    <div className="col-md-5 col-8 offset-1" id="logos-usp">
                        <img src={LogoUSP} alt="Universidade de São Paulo" id="logo-usp"/>
                        <img src={LogoPRP} alt="Pró-Reitoria de Pesquisa da USP" id="logo-prp" />
                    </div>
                </div>
                <Numbers
                numero1="+45k"
                descricao1_1="Inscritos nos"
                descricao1_2="cursos online"
                numero2="+300h"
                descricao2_1="De aula e"
                descricao2_2="materiais"
                numero3="+40"
                descricao3_1="Startups e"
                descricao3_2="empresas"
                numero4="+60"
                descricao4_1="Profissionais"
                descricao4_2="convidados" />
                <div className="retangulos">
                    <div className="row container">
                        <div className="col">
                            <a href="/Cursos" target="_blank">
                                <HomeCurso nomecurso ="Marketing Digital"
                                corDeFundo="#edc02c" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="/Cursos" target="_blank">
                                <HomeCurso nomecurso ="Criação de Startups"
                                corDeFundo="#12a2da" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="/Cursos" target="_blank">
                                <HomeCurso nomecurso ="Jurídico e Financeiro"
                                corDeFundo="#edc02c" />
                            </a>
                        </div>
                    </div>
                    <div className="row container retangulos" style={{marginTop: 24}}>
                        <div className="col">
                            <a href="/Cursos" target="_blank">
                                <HomeCurso nomecurso ="Design e interface"
                                corDeFundo="#12a2da" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="/Cursos" target="_blank">
                                <HomeCurso nomecurso ="Marketing e Vendas B2B"
                                corDeFundo="#003e60" />
                            </a>
                        </div>
                        <div className="col">
                            <a href="/Cursos" target="_blank">
                                <HomeCurso nomecurso ="Operações e Escala"
                                corDeFundo="#12a2da" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}