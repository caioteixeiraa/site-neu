import * as React from 'react';
import './card_section_right.css';
import { CardNEU } from './card_neu';
import imgSHIP from '../img/home_StartupSHIP.png';

export class CardSectionRight extends React.Component {
    render() {
        return (
            <div className="row startupship">
                <div className="container col-3 cardneu por_cima">
                    <CardNEU titulo="Estágios em startups" subtitulo="Quer estagiar em uma startup?" texto="Faça parte do StartupSHIP, o programa do NEU que ajuda alunos da Universidade de São Paulo a estagiar nas melhores e maiores startups."/>
                </div>
                <img className="logo-SHIP" src={imgSHIP} alt="startupSHIP" />
            </div>
        )
    }
}