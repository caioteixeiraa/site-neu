import * as React from 'react';
import './carrossel_startups.css';
import logo_99 from '../img/logos-startups/logo-99--black-yellow.svg';
import logo_ingresse from '../img/logos-startups/ingresse-06.svg';
import logo_mobly from '../img/logos-startups/logo-mobly.svg';
import logo_appsimples from '../img/logos-startups/appsimples_logo.svg';
import logo_cuidas from '../img/logos-startups/cuidas_c_h.png';
import logo_flowsense from '../img/logos-startups/FlowsenseLogo.svg';
import logo_genera from '../img/logos-startups/logo-genera1-e1458431074399.png';
import logo_celebrar from '../img/logos-startups/celebrar.png';
import logo_yellow from '../img/logos-startups/yellowlogo.png';
import logo_storymax from '../img/logos-startups/storymax_72dpi_web.png';
import logo_mvisia from '../img/logos-startups/logo-mvisia.svg';

export class CarrosselStartups extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h2 className="subtitulo-carrossel">Startups que já contrataram pelo StartupSHIP</h2>
                <div className="container-fluid carrossel linha">
                <a href="https://flowsense.com.br/" target="_blank">
                    <img src={logo_flowsense} alt="Flowsense" className="tamanho-img-14vw margem-direita-3em"/>
                </a>
                <a href="https://99app.com/" target="_blank">
                    <img src={logo_99} alt="99" className="tamanho-img-4vw margem-direita-5em" />
                </a>
                <a href="https://celebrar.co/" target="_blank">
                    <img src={logo_celebrar} alt="Celebrar.co" className="tamanho-img-10vw margem-direita-4em"/>
                </a>
                <a href="https://www.ingresse.com/" target="_blank">
                    <img src={logo_ingresse} alt="Ingresse" className="tamanho-img-10vw margem-direita-5em" />
                </a>
                <a href="https://www.yellow.app/" target="_blank">
                    <img src={logo_yellow} alt="Yellow" className="tamanho-img-8vw margem-direita-5em"/>
                </a>
                <a href="http://mvisia.com.br/" target="_blank">
                    <img src={logo_mvisia} alt="MVISIA" className="tamanho-img-10vw margem-direita-5em"/>
                </a>
                <a href="https://cuidas.com.br/" target="_blank">
                    <img src={logo_cuidas} alt="Cuidas" className="tamanho-img-14vw margem-direita-5em"/>
                </a>
                <a href="https://www.mobly.com.br/" target="_blank">
                    <img src={logo_mobly} alt="Mobly" className="tamanho-img-8vw margem-direita-5em"/>
                </a>
                <a href="https://www.genera.com.br/" target="_blank">
                    <img src={logo_genera} alt="Genera" className="tamanho-img-10vw margem-direita-4em"/>
                </a>
                <a href="https://www.appsimples.com.br/" target="_blank">
                    <img src={logo_appsimples} alt="Appsimples" className="tamanho-img-10vw margem-direita-4em"/>
                </a>
                <a href="https://storymax.me/" target="_blank">
                    <img src={logo_storymax} alt="StoryMax" className="tamanho-img-14vw margem-direita-4em"/>
                </a>
                </div>
            </div>    
        )
    }
}
