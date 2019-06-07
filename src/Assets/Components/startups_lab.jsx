import * as React from 'react';
import './startups_lab.css';
import logo_mvisia from '../img/logos-startups/logo-mvisia.svg';
import logo_retina from '../img/logos-startups/Retina_vision_preto_low.png';
import logo_flowsense from '../img/logos-startups/FlowsenseLogo.svg';

export class StartupsLab extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (    
            <div className="container cases-de-sucesso">
                <div className="container row align-items-center">
                    <div className="col-md-3 texto-cases">
                        <h4>{this.props.titulo}</h4>
                    </div>
                    <div className="col-md-9 logo-startups-lab">
                        <a href="http://mvisia.com.br/" target="_blank">
                            <img className="logo-mvisia responsive" src={logo_mvisia} alt="MVISIA"/>
                        </a>
                        <a href="https://www.retinavision.com.br/" target="_blank">
                            <img className="logo-retina responsive" src={logo_retina} alt="Retina Vision"/>
                        </a>
                        <a href="http://flowsense.com.br/" target="_blank">
                            <img className="logo-flowsense responsive" src={logo_flowsense} alt="Flowsense"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

