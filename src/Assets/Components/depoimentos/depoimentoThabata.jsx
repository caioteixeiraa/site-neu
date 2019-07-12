import * as React from 'react';
import './depoimento.css';
import logo_pier from './pier final-01.png';
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
                        <p className="texto-depo">"Agradeço muito a conexão, pois se não fosse pelo NEU eu não teria encontrado a Pier e nem me desenvolvendo tanto como hoje. A melhor parte de trabalhar em uma startup é ver ela crescer sabendo que tem o seu dedo ali. A Pier possibilita isso, aumentando o aprendizado exponencialmente. " </p>
                        <h5 className="nome-depo">Thabata Pontes</h5>
                        <h5 className="cargo-depo">Estagiária de Marketing</h5>
                    </div>
                    <a href="https://www.pier.digital/" target="_blank">
                        <img src={logo_pier} alt="" id="" className="img-pier img-center" />
                    </a>
                </div>
            </div>    
        )
    }
}

