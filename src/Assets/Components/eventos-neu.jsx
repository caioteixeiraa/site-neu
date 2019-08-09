import * as React from 'react';
import './eventos-neu.css';
import LogoPiratas from '../img/Logo-piratas.svg';
import LogoSer from '../img/logo-ser.jpeg';

export class EventosNEU extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row logos-eventos">
                    <img src={LogoPiratas} alt="Treinamento de Novos Piratas" className="col-md-3"/>
                    <img src={LogoPiratas} alt="SER Empreendedor" className="col-md-3"/>
                    <img src={LogoPiratas} alt="Piratas" className="col-md-3"/>
                </div>
            </div>
        )
    }
}