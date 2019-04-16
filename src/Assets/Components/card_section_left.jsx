import * as React from 'react';
import './card_section_left.css';
import { CardNEU } from './card_neu';
import imgLAB from '../img/home_StartupLAB.png';

export class CardSectionLeft extends React.Component{
    render() {
        return (
            <div className="row startuplab">
                <img className="logo-LAB" src={imgLAB} alt="startupLAB" />
                <div className="container col-3 cardneu">
                    <CardNEU titulo="Pré-aceleração" subtitulo="Tem uma ideia e quer empreender?" texto="Faça parte do programa de pré-aceleração StartupLAB, e torne sua ideia de negócio em uma startup!"/>
                </div>
            </div>
        )
    }
}