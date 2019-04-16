import * as React from 'react';
import './home_parceiros.css'

export class HomeParceiros extends React.Component{
    render() {
        return (
            <div className="container" id="parceiros-section">
                <h1 className="titulo container row">Empresas parceiras</h1>
                <div className="row">
                    <div className="textos col-md-7">
                        <p className="texto">Essas empresas apoiam o NEU e tornam tudo que fazemos possível, ajudando
                        cada vez mais a fomentar o ecossistema de empreendedorismo da Universidade.</p>
                    </div>
                </div>
            </div>
        )
    }
}