import * as React from 'react';
import './depoimento.css';
import logo_cuidas from './cuidas-logo.svg';
import Gabriel from './yshay.png';

export class DepoimentoGabriel extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em top-amarelo">
                <img src={Gabriel} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" </p>
                        <h5 className="nome-depo">Gabriel Yshay</h5>
                        <h5 className="cargo-depo">Estagiário de Desenvolvimento</h5>
                    </div>
                    <a href="https://www.cuidas.com.br/" target="_blank">
                        <img src={logo_cuidas} alt="" id="" className="img-cuidas img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}