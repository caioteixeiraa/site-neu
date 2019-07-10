import * as React from 'react';
import './depoimento.css';
import logo_yellow from './yellowlogo.png';
import Renato from './renato.png';

export class DepoimentoRenato extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em top-amarelo">
                <img src={Renato} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" </p>
                        <h5 className="nome-depo">Renato Freitas</h5>
                        <h5 className="cargo-depo">Co-founder e CTO</h5>
                    </div>
                    <a href="https://www.yellow.app/" target="_blank">
                        <img src={logo_yellow} alt="" id="" className="img-yellow img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}