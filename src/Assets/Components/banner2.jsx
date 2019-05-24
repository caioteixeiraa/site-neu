import * as React from 'react';
import './banner2.css';
import { Navbar } from './navbar';
import LogoSHIP from '../img/logo3 ship.png';

export class Banner2 extends React.Component{
    render() {
        return (
            <div className="home-banner">
                <Navbar />
                <div className="container banner-content">
                    <img src={LogoSHIP} alt="StartupSHIP" id="logo-ship" />
                    <p className="center col-lg-6 col-md-6 col-sm-8 col-xs-2">Conexão de alunos USP a vagas de estágio em startups</p>
                    <a href="http://bit.ly/quero_estagiar_em_uma_startup" target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary-banner center" href="#">Quero estagiar</button></a>
                </div>
            </div>
        )
    }
}