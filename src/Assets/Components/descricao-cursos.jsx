import * as React from 'react';
import './descricao-cursos.css'
import LogoUSP from '../img/usp-1-logo-svg-vector.svg';
import LogoPRP from '../img/PRP.png';

export class DescricaoCursos extends React.Component{
    render() {
        return (
            <div className="bloco container">
                <h1 className="titulo container row">Cursos NEU</h1>
                <h3 className="subtitulo container row">Cursos online produzidos pelo NEU</h3>
                <div className="alinha-centro row">
                    <div className="textos col-md-6">
                        <p className="texto">Para quem não consegue participar dos nossos eventos e programas, produzimos <b>6 cursos em parceria com a Pró-Reitoria de Pesquisada USP</b>, 
                        e diversas <b>startups e agentes do ecossistema de empreendedorismo</b> têm como propósito direcionar todas as ferramentas práticas específicas para cada área.</p>
                    </div>
                    <div className="col-md-5 col-8 offset-1" id="logos-usp">
                        <img src={LogoUSP} alt="Universidade de São Paulo" id="logo-usp"/>
                        <img src={LogoPRP} alt="Pró-Reitoria de Pesquisa da USP" id="logo-prp" />
                    </div>
                </div>
            </div>
        )
    }
}