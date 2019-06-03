import * as React from 'react';
import { Depoimento } from './depoimento';
import './secao_depoimentos.css'

export class SecaoDepoimentos extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container-fluid" id="secao-depoimentos">
                <Depoimento />
                <Depoimento />
                <Depoimento />
            </div>    
        )
    }
}
