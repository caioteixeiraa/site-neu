import * as React from 'react';
import './banner.css';
import HomeBanner from '../img/home_banner.png';
import { Navbar } from './navbar'

export class Banner extends React.Component{
    render() {
        return (
            <div className="home-banner">
                <Navbar />
                <div className="container">
                    <h1 className="title text-align-left col-lg-6 col-md-6 col-sm-8 col-xs-2">Núcleo de Empreendedorismo da USP</h1>
                    <p className="text-align-left col-lg-6 col-md-6 col-sm-8 col-xs-2">Fomentando a cultura de empreendedorismo na Universidade de São Paulo</p>
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary-banner" href="#">Saiba Mais</button>
                    </div>
            </div>
        )
    }
}