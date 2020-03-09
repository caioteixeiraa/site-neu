import * as React from 'react';
import './card_section_right.css';
import imgSHIP from '../img/home_StartupSHIP.png';

export class CardSectionRight extends React.Component {
    render() {
        return (
        <div>
            <hr className="divider" />
        <div className="container-fluid startuplab">
            <div className="row">
                <div className="container">
                    <div className="row align-center">
                        <img className="logo-LAB" src={imgSHIP} alt="startupSHIP" />
                        <div className="col-md-7 ml-auto">
                            <div className="card card-body p-5">
                                <h2 className="card-title">Estágios em startups</h2>
                                <h4 className="card-subtitle">Quer estagiar em uma startup?</h4>
                                <p className="card-text">Faça parte do StartupSHIP, o programa do NEU que <b>ajuda alunos da Universidade de São Paulo a estagiar</b> nas melhores e maiores startups.</p>
                                <a href="/StartupShip"><button type="button" className="button-primary" href="/StartupShip">Saber mais</button></a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </div>
        )
    }
}