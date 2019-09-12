import * as React from 'react';
import './depoimento.css';
import logo_cuidas from './cuidas_c_h.png';
import Deborah from './Deborah.png';

export class DepoimentoDeborah extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em top-amarelo">
                <img src={Deborah} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Tivemos uma experiência ótima com o Yshay, estagiário que contratamos através da ponte do NEU. Ele era parte essencial do time, trabalhou em projetos muito importantes pra nossa equipe de desenvolvimento, e trouxe uma energia muito boa para nossa empresa. Estamos ansiosos pra ele voltar." </p>
                        <h5 className="nome-depo">Deborah Alves</h5>
                        <h5 className="cargo-depo">Co-founder e CTO</h5>
                    </div>
                    <a href="https://www.cuidas.com.br/" target="_blank">
                        <img src={logo_cuidas} alt="" id="" className="img-cuidas img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}