import * as React from 'react';
import './depoimento.css';
import logo_pier from './pier.png';
import Lucas from './LucasPrado.png';

export class DepoimentoLucas extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em top-amarelo">
                <img src={Lucas} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" </p>
                        <h5 className="nome-depo">Lucas Prado</h5>
                        <h5 className="cargo-depo">Co-founder e CMO</h5>
                    </div>
                    <a href="https://www.pier.digital/" target="_blank">
                        <img src={logo_pier} alt="" id="" className="startup-depo img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}