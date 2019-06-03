import * as React from 'react';
import './depoimento.css';
import logo_ingresse from '../img/logos-startups/ingresse-06.svg';
import foto_renato from '../img/renato.jpeg';

export class Depoimento extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3">
                <img className="img-rounded img-center img-depo" src={foto_renato} alt="Renato Freitas"/>
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" </p>
                        <h5 className="nome-depo">Renata Faria</h5>
                        <h5 className="cargo-depo">Founder e CEO</h5>
                    </div>
                    <a href="https://www.ingresse.com/" target="_blank">
                        <img className="startup-depo img-center margin-4em" src={logo_ingresse} alt="Ingresse"/>
                    </a>
                </div>
            </div>    
        )
    }
}
