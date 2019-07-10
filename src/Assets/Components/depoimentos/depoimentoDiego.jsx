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
                        <p className="texto-depo">"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" </p>
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