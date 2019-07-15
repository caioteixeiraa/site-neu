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
                        <p className="texto-depo" id="">"Sempre gostei de ter o NEU por perto. A influência do núcleo na universidade é muito grande, e consegue atrair talentos incríveis. O NEU ajudou a preencher algumas vagas na 99 e, agora na Yellow, selecionamos o Diego que veio para o time de dados impressionando desde a entrevista. Melhor fit, impossível :)" </p>
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