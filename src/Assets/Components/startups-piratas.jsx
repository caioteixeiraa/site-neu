import * as React from 'react';
import './lab_cases.css';
import './startups-piratas.css';
import logo_taqtile from '../img/logos-startups/taqtile-quadrado.png';
import logo_nubank from '../img/logos-startups/nubank-05.svg';
import logo_ingresse from '../img/logos-startups/logo-ingresse.png';
import logo_mobly from '../img/logos-startups/logo-mobly.svg';

export class StartupsPiratas extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (    
            <div className="container cases-de-sucesso margem">
                <div className="container row align-items-center space">
                    <div className="col-md-2 texto-cases texto-2em">
                        <h4>Startups participantes:</h4>
                    </div>
                    <div className="col-md-9 logo-startups-lab">
                        <a href="http://taqtile.com.br/" target="_blank">
                            <img className="img-6em responsive" src={logo_taqtile} alt="Taqtile"/>
                        </a>
                        <a href="https://www.nubank.com.br/" target="_blank">
                            <img className="img-9em responsive" src={logo_nubank} alt="Nubank"/>
                        </a>
                        <a href="http://ingresse.com.br/" target="_blank">
                            <img className="img-11em responsive" src={logo_ingresse} alt="Ingresse"/>
                        </a>
                        <a href="http://mobly.com.br/" target="_blank">
                            <img className="img-9em responsive" src={logo_mobly} alt="Mobly"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}