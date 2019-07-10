import * as React from 'react';
import './depoimento.css';
import logo_ingresse from '../img/logos-startups/ingresse-06.svg';
import x from '../img/LucasPrado.png';


export class Depoimento extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card-depo col-md-3 margin-right-2em">
                <img src={require(`../img/${this.props.foto}.png`)} alt="" id="" className="img-rounded img-center img-depo" />
                <div className="padding-depo">
                    <div className="content-depo">
                        <p className="texto-depo">"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" </p>
                        <h5 className="nome-depo">{this.props.nome}</h5>
                        <h5 className="cargo-depo">{this.props.cargo}</h5>
                    </div>
                    <a href="https://www.ingresse.com/" target="_blank">
                        <img src={require(`../img/logos-startups/${this.props.logo}.png`)} alt="" id="" className="startup-depo img-center margin-4em" />
                    </a>
                </div>
            </div>    
        )
    }
}
