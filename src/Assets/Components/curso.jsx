import * as React from 'react';
import './curso.css';

export class Curso extends React.Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div className="row startuplab">
                <img className="logo-LAB" src={require(`../img/${this.props.foto}`)} alt="" />
                <div className="container">
                    <div className="card cardneu col-md-7">
                        <div className="card-body">
                            <h2 className="card-title">{this.props.nome}</h2>
                            <p className="card-text">{this.props.descricao}</p>
                            <a href={this.props.link} target="_blank" ><button type="button" className="button-primary" href="/StartupLAB">Assistir esse curso</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

