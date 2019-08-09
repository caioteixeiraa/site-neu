import * as React from 'react';
import './eventos-neu.css';
import LogoPiratas from '../img/Logo-piratas.png';
import LogoSer from '../img/SER_LOGO.png';
import LogoHack from '../img/Logo_Hack.png';

export class EventosNEU extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row logos-eventos">
                <a href="#piratas">
                    <img src={LogoPiratas} alt="Treinamento de Novos Piratas" className="col-md-3" id="logo-piratas"/>
                </a>
                <a href="#ser">
                    <img src={LogoSer} alt="SER Empreendedor" className="col-md-3 logo-evento" id="logo-ser"/>
                </a>
                <a href="#hack">
                    <img src={LogoHack} alt="Piratas" className="col-md-3" id="logo-hack" />
                </a>
                </div>
            </div>
        )
    }
}