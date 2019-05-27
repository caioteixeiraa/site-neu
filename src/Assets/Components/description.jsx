import * as React from 'react';
import './description.css'

export class Description extends React.Component{
    render() {
        return (
            <div className="bloco container">
                <h1 className="titulo container row">O que é o NEU?</h1>
                <div className="row">
                    <div className="textos col-md-7">
                        <p className="texto">O NEU (Núcleo de Empreendedorismo da USP) é uma <b>organização sem fins lucrativos</b>, 
                        formada por alunos com apoio de pesquisadores e professores movidos por uma missão: <b>fomentar a cultura de 
                        empreendedorismo na Universidade de São Paulo</b>.</p>
                        <p className="texto">Dessa maneira são desenvolvidos programas, projetos e
                        eventos no <b>propósito de inspirar, capacitar e conectar os alunos de toda a Universidade</b> para o mercado de trabalho</p>
                    </div>
                </div>
                <div className="botoes row">
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary" href="#">Como o NEU surgiu</button>
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary" href="#">Quero apoiar o NEU</button>
                </div>
            </div>
        )
    }
}