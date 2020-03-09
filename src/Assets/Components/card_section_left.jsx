import * as React from 'react';
import './card_section_left.css';
import { CardNEU } from './card_neu';
import imgLAB from '../img/home_StartupLAB.png';

export class CardSectionLeft extends React.Component{
    render() {
        return (
        <div>
        <hr className="divider" />
            <div className="container-fluid startuplab">
                <div className="row">
                    <div className="container">
                        <div className="row align-center">
                            <img className="logo-LAB" src={imgLAB} alt="startupLAB" />
                            <div className="col-md-7 ml-auto">
                                <div className="card card-body p-5">
                                    <h2 className="card-title">Pré-aceleração</h2>
                                    <h4 className="card-subtitle">Tem uma ideia e quer empreender?</h4>
                                    <p className="card-text">Faça parte do <b>programa de pré-aceleração StartupLAB</b>, e torne sua ideia de negócio em uma startup!</p>
                                    <a href="/StartupLab"><button type="button" className="button-primary" href="StartupLab">Saber mais</button></a>
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

