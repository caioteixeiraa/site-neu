import * as React from 'react';
import './card_section_right.css';
import { CardNEU } from './card_neu';
import imgSHIP from '../img/home_StartupSHIP.png';

export class CardSectionRight extends React.Component {
    render() {
        return (
            <div className="row startupship">
                <img className="logo-SHIP" src={imgSHIP} alt="startupSHIP" />
                <div className="container por_cima">
                    <div className="container card cardneu col-md-7">
                        <div className="card-body">
                            <h2 className="card-title">Estágios em startups</h2>
                            <h4 className="card-subtitle">Quer estagiar em uma startup?</h4>
                            <p className="card-text">Faça parte do StartupSHIP, o programa do NEU que <b>ajuda alunos da Universidade de São Paulo a estagiar</b> nas melhores e maiores startups.</p>
                            <a href="/StartupSHIP"><button type="button" className="button-primary">Saber mais</button></a>
                        </div>
                    </div>
                </div>            
            </div>
        )
    }
}