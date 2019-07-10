import * as React from 'react';
import './depoimento.css';
import logo_pier from './pier.png';
import Thabata from './Thabata.png';

export class DepoimentoThabata extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em top-azul">
                <img src={Thabata} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" </p>
                        <h5 className="nome-depo">Thabata Pontes</h5>
                        <h5 className="cargo-depo">Estagiária de Marketing</h5>
                    </div>
                    <a href="https://www.pier.digital/" target="_blank">
                        <img src={logo_pier} alt="" id="" className="img-pier img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}