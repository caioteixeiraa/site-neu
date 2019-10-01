import * as React from 'react';
import './how_works.css';

export class HowWorks extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container" id="how-works-lab">
                <div className="col-md-5">
                    <h3>{this.props.titulo1}</h3>
                </div>
                <div className="container row textos-lab">
                    <div className="col-md-5 col-12 offset-0 offset-md-0 texto-esquerdo">
                        <p>{this.props.textolateral}</p>
                        <div className="botao-lab">
                            <a href={this.props.refpage}><button type="button" className="button-primary">Saber mais</button></a>
                        </div>
                    </div>
                    <div className="col-md-5 offset-1 itens-lab">
                        <p>{this.props.item1}</p>
                        <p>{this.props.item2}</p>
                        <p>{this.props.item3}</p>
                        <p>{this.props.item4}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}