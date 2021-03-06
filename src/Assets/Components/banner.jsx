import * as React from 'react';
import './banner.css';
import { NavbarNEU } from './navbar'

export class Banner extends React.Component{
    render() {
        return (
            <div className="home-banner">
                <NavbarNEU />
                <div className="container">
                    <h1 className="title text-align-left col-md-6">Núcleo de Empreendedorismo da USP</h1>
                    <p className="text-align-left col-md-6 texto-banner">Fomentando a cultura de empreendedorismo na Universidade de São Paulo</p>
                    <div className="container">
                        <a href="/Sobre" target="" ><button type="button col-md-6" className="button-secondary-banner" href="/Sobre">Saiba Mais</button></a>
                    </div>
                    </div>
            </div>
        )
    }
}