import * as React from 'react';
import './startups_ship.css';
import logo_99 from '../img/logos-startups/logo-99--black-yellow.svg';
import logo_ingresse from '../img/logos-startups/ingresse-06.svg';
import logo_mobly from '../img/logos-startups/logo-mobly.svg';

export class StartupsShip extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (    
            <div className="container cases-do-ship">
                <div className="container row align-items-flexend logo-startups-ship">
                    <div className="col-md-3 texto-cases">
                        <h4>{this.props.titulo}</h4>
                    </div>
                    <div className="col-md-9">
                        <a href="https://99app.com/" target="_blank">
                            <img className="logo-99 responsive" src={logo_99} alt="99"/>
                        </a>
                        <a href="https://www.ingresse.com/" target="_blank">
                            <img className="logo-ingresse responsive" src={logo_ingresse} alt="Ingresse"/>
                        </a>
                        <a href="https://www.mobly.com.br/" target="_blink">
                            <img className="logo-mobly responsive" src={logo_mobly} alt="Mobly"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
