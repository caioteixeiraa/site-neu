import * as React from 'react';
import './como_funciona_lab.css';
import { TimelineLab } from '../Components/timeline_lab';

export class ComoFuncionaLab extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container margem-top">
                <h1 className="titulo-como-funciona-lab">Estrutura do programa:</h1>
                <p className="texto-como-funciona-lab col-md-6">A nossa pré-aceleração segue uma ordem que permite você <b>testar e descobrir na prática</b> 
                se a sua ideia está pronta para virar um <b>negócio estruturado, escalável e financeiramente sustentável</b>, seguindo essas 6 etapas:
                </p>
                <TimelineLab />
            </div>    
        )
    }
}
