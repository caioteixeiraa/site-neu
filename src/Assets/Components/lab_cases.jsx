import * as React from 'react';
import './lab_cases.css';
import logo_mvisia from '../img/logos-startups/logo-mvisia.svg';
import logo_retina from '../img/logos-startups/Retina_vision_preto_low.png';
import logo_flowsense from '../img/logos-startups/FlowsenseLogo.svg';
import logo_hangar from '../img/logos-startups/logo-hangar.svg';
import logo_leansurvey from '../img/logos-startups/Lean-survey.jpg';
import logo_area25 from '../img/logos-startups/logo-area25.png';

export class LabCases extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (    
            <div className="container cases-de-sucesso">
                <div className="container row align-items-center">
                    <div className="col-md-2 texto-cases texto-2em">
                        <h4>Cases de sucesso:</h4>
                    </div>
                    <div className="col-md-10 logo-startups-lab">
                        <a href="http://mvisia.com.br/" target="_blank">
                            <img className="img-6em responsive" src={logo_mvisia} alt="MVISIA"/>
                        </a>
                        <a href="https://www.retinavision.com.br/" target="_blank">
                            <img className="img-7em responsive" src={logo_retina} alt="Retina Vision"/>
                        </a>
                        <a href="http://flowsense.com.br/" target="_blank">
                            <img className="img-9em responsive" src={logo_flowsense} alt="Flowsense"/>
                        </a>
                        <a href="http://hangareducacao.com.br/" target="_blank">
                            <img className="img-4em responsive" src={logo_hangar} alt="Hangar Educação"/>
                        </a>
                        <a href="http://leansurvey.com.br/" target="_blank">
                            <img className="img-7em responsive" src={logo_leansurvey} alt="Lean Survey"/>
                        </a>
                        <a href="http://area25.com.br/" target="_blank">
                            <img className="img-7em responsive" src={logo_area25} alt="Area 25"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}