import * as React from 'react';
import './home_rect_curso.css';

export class HomeCurso extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="retangulo-curso fundo-amarelo" style={{backgroundColor: this.props.corDeFundo}}>
                <div className="col-8">
                    <h3 className="texto-branco">{this.props.nomecurso}</h3>
                </div>
            </div>
        )
    }
}