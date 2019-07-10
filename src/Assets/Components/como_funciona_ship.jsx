import * as React from 'react';
import './como_funciona_ship.css';
import { TimelineShip } from '../Components/timeline';

export class ComoFuncionaShip extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container margem-top">
                <h1 className="titulo-como-funciona-ship">Como funciona:</h1>
                <p className="texto-como-funciona-ship col-md-6">O StartupSHIP <b>divulga vagas das startups da rede NEU</b> diariamente as nossas mídias sociais
                    e e-mail. Está interessado e não sabe por onde começar?
                </p>
                <TimelineShip />
            </div>    
        )
    }
}
