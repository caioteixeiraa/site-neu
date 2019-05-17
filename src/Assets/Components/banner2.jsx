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
                    <p className="col-lg-6 col-md-6 col-sm-8 col-xs-2">Conexão de alunos USP a vagas de estágio em startups</p>
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary-banner" href="#">Quero estagiar</button>
                </div>
            </div>
        )
    }
}