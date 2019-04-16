import * as React from 'react';
import './card_neu';

export class CardNEU extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container card">
                    <div className="card-body">
                        <h2 className="card-title">{this.props.titulo}</h2>
                        <h4 className="card-subtitle">{this.props.subtitulo}</h4>
                        <p className="card-text">{this.props.texto}</p>
                        <button type="button" className="button-primary" href="#">Saber mais</button>
                    </div>
                </div>
            </div>
        )
    }
}