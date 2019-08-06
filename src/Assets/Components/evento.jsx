import * as React from 'react';
import './evento.css';

export class Evento extends React.Component{
    render() {
        return (
            <div className="margem">
                <div className="container">
                    <hr className="divider" />
                    <h1 className="titulo container row col-md-6">{this.props.nomeEvento}</h1>
                    <h3 className="subtitulo container row col-md-6">{this.props.subtitulo}</h3>
                    <div className="row">
                        <div className="textos col-md-7 align-items-center space-between">
                            <p className="texto">{this.props.descricao}</p>
                        </div>
                        <div className="col-md-3 logo">
                            <img src={require(`../img/${this.props.logo}`)} alt="" />
                        </div>
                    </div>
                    <div className="botoes container row">
                        <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary" href="#">Inscrever-me</button>
                    </div>
                </div>
            </div>
        )
    }
}