import * as React from 'react';
import './depoimento.css';
import logo_ingresse from './ingresse-06.svg';
import Sato from './sato.png';

export class DepoimentoSato extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em top-azul">
                <img src={Sato} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" </p>
                        <h5 className="nome-depo">Matheus Sato</h5>
                        <h5 className="cargo-depo">Estagiário de Desenvolvimento</h5>
                    </div>
                    <a href="https://www.ingresse.com/" target="_blank">
                        <img src={logo_ingresse} alt="" id="" className="img-ingresse img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}