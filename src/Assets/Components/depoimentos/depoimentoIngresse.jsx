import * as React from 'react';
import './depoimento.css';
import logo_ingresse from './ingresse-06.svg';
import Hugo from './hugo.png';

export class DepoimentoIngresse extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em top-amarelo">
                <img src={Hugo} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"O Matheus desde o início se encaixou muito bem na equipe, demonstrando muita vontade de entender o negócio da empresa e de conseguir entregar valor ao produto. Ele ganhou muita experiência na Ingresse e nós o vemos mais preparado para criar soluções criativas e eficientes como nós fazemos." </p>
                        <h5 className="nome-depo">Hugo Campos</h5>
                        <h5 className="cargo-depo">Desenvolvedor</h5>
                    </div>
                    <a href="https://www.ingresse.com/" target="_blank">
                        <img src={logo_ingresse} alt="" id="" className="img-ingresse img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}