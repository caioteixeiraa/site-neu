import * as React from 'react';
import './depoimento.css';
import logo_yellow from './yellowlogo.png';
import Diego from './diego.png';

export class DepoimentoDiego extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em top-azul">
                <img src={Diego} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Foi muito daora! O contato foi graças ao NEU, eu agradeço muito a vocês. A experiência na Yellow foi muito boa, eu aprendi muito lá e me envolvi nas mais diversas áreas. Isso abriu uma série de portas na minha vida, conheci pessoas que se não fosse elas eu não estaria onde estou hoje."</p>
                        <h5 className="nome-depo">Diego Bechara</h5>
                        <h5 className="cargo-depo">Estagiário de Data Science</h5>
                    </div>
                    <a href="https://www.yellow.app/" target="_blank">
                        <img src={logo_yellow} alt="" id="" className="img-yellow img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}