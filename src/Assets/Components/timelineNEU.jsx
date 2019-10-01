import * as React from 'react';
import './timeline.css';
import RUNN from '../img/rede_usp_negocios.jpg';
import lean_survey from '../img/logos-startups/Lean-survey.jpg';
import area25 from '../img/logos-startups/logo-area25.png';
import MVISIA from '../img/logos-startups/logo-mvisia.svg';
import oraculo from '../img/logos-startups/oraculo-meteorologia-logo.png';
import icone_download from '../img/download-arrow.svg';

export class TimelineNEU extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="margem-top-12em col-md-6">
                    <div>
                        <h4 className="titulo-timeline azul">2011</h4>
                        <p className="margem-top-1em">Tudo começou com um grupo de alunos interessados em empreender e que não se sentiam apoiados dentro da Universidade.</p>
                        <div className="link row align-items-center margem-top-2em">
                            <img className="logo-timeline" src={RUNN} alt=""/>
                            
                        </div>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em azul">2012</h4>
                        <p className="margem-top-1em">Com essa dor, resolveram se reunir para um apoio mútuo - e com o tempo perceberam que esse apoio poderia transbordar para outros alunos.</p>
                        <div className="row align-items-center margem-top-2em">
                        </div>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em azul">2013</h4>
                        <p className="margem-top-1em">Surgiram assim, nossos primeiros eventos e atividades, como o Startupapo - um bate-papo com fundadores de startups contando suas experiências para os alunos.</p>
                        <div className="row align-items-center margem-top-2em">
                            <img className="logo-timeline" src={lean_survey} alt="Lean Survey"/>
                            <img className="logo-timeline-2" src={area25} alt="Area 25"/>
                        </div>
                        <h4 className="h4-timeline col-md-7">Started - Maior evento de empreendedorismo da USP</h4>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em azul">2015</h4>
                            <img className="logo-timeline margin-top" src={MVISIA} alt="MVISIA"/>
                        <h4 className="h4-timeline margin-top">Festival de Empreendedorismo da USP - FEU</h4>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em azul">2016</h4>
                        <img className="logo-timeline margin-top" id="oraculo" src={oraculo} alt="Oraculo Meteorologia"/>
                        <h4 className="h4-timeline margin-top">1º HackathonUSP</h4>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em azul">2017</h4>
                        <h4 className="h4-timeline margin-top">1º Treinamento de Novos Piratas e Lançamento do 1º curso do NEU de criação de startups.</h4>
                        <a className="link row align-items-center margem-top-2em" href="../arquivos_download/NEU - Resultados de 2017 (1)_compressed.pdf" download>
                            <img className="icone-timeline" src={icone_download} alt=""/>
                            <h6 className="">Relatório de resultados de 2017</h6>
                        </a>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em azul">2018</h4>
                        <h4 className="h4-timeline margin-top">Lançamento de +5 cursos do NEU de criação de startups. União com a Poli Júnior para realizar o SER Empreendedor.</h4>
                        <a className="link row align-items-center margem-top-2em" href="../arquivos_download/NEU - Resultados de 2018_s_compressed.pdf" download>
                            <img className="icone-timeline" src={icone_download} alt=""/>
                            <h6 className="">Relatório de resultados de 2018</h6>
                        </a>
                    </div>
                </div>
                <div className="container botoes-ship row">
                    <a href="#" target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary" href="mailto:neu@uspempreende.com">Quero apoiar o NEU</button></a>
                    <a href="#" target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary" href="mailto:neu@uspempreende.com">Fale conosco</button></a>

                </div>
            </div>
        )
    }
}