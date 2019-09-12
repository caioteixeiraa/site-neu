import * as React from 'react';
import './banner2.css';
import './banner-ship.css';
import { NavbarNEU } from './navbar';

export class BannerShip extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="home-banner-ship">
                <NavbarNEU />
                <div className="container banner-content">
                    <img src={require(`../img/${this.props.name}.png`)} alt="StartupSHIP" id="logo-ship" />
                    <p className="center col-md-6 texto-banner2">{this.props.descricao}</p>
                    <a href={this.props.linkbotao} target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary-banner center" href="#">{this.props.conteudobotao}</button></a>
                </div>
            </div>
        )
    }
}