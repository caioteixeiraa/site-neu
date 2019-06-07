import * as React from 'react';
import './descricaoprograma.css'

export class DescricaoPrograma extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="bloco container">
                <h1 className="titulo container row">{this.props.title}</h1>
                <h3 className="subtitulo container row">{this.props.subtitle}</h3>
                <div className="row">
                    <div className="textos col-md-6">
                        <p className="texto">{this.props.text}</p>
                    </div>
                </div>
                <div className="botoes row">
                    <a href={this.props.link_primeirobotao} target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary" href="#">{this.props.btnprimary}</button></a>
                    <a href={this.props.link_segundobotao} target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary">{this.props.btnsecondary}</button></a>
                </div>
            </div>
        )
    }
}
/* href="http://bit.ly/quero_estagiar_em_uma_startup" */