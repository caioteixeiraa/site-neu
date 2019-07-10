import * as React from 'react';
import './secao_icones.css';

export class SecaoIcones extends React.Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div className="container margem-top-secao-icones">
                <h2 className="titulo-secao-icones">{this.props.tituloh2}</h2>
                <div className="container row justificado">
                    <div className="col-md-3 item-secao-icones">
                        <div className="margem-top3em">
                            <img src={require(`../img/${this.props.icone_1}.svg`)} alt="" id="icone1" className="icone-secao-icones" />
                        </div>
                        <div className="subtitulo-secao-icones">
                            <h4>{this.props.subtituloh4_1}</h4>
                        </div>
                        <div className="texto-secao-icones">
                            <p>{this.props.texto_1}</p>
                        </div>
                    </div>
                    <div className="col-md-3 item-secao-icones">
                        <div className="margem-top3em">
                            <img src={require(`../img/${this.props.icone_2}.svg`)} alt="" id="icone2" className="icone-secao-icones" />
                        </div>
                        <div className="subtitulo-secao-icones">
                            <h4>{this.props.subtituloh4_2}</h4>
                        </div>
                        <div className="texto-secao-icones">
                            <p>{this.props.texto_2}</p>
                        </div>
                    </div>
                    <div className="col-md-3 item-secao-icones">
                        <div className="margem-top3em">
                            <img src={require(`../img/${this.props.icone_3}.svg`)} alt="" id="icone3" className="icone-secao-icones" />
                        </div>
                        <div className="subtitulo-secao-icones">
                            <h4>{this.props.subtituloh4_3}</h4>
                        </div>
                        <div className="texto-secao-icones">
                            <p>{this.props.texto_3}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}