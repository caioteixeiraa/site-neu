import * as React from 'react';
import { DepoimentoLucas } from './depoimentos/depoimentoLucas';
import { DepoimentoThabata } from './depoimentos/depoimentoThabata';
import { DepoimentoRenato } from './depoimentos/depoimentoRenato';
import { DepoimentoDiego } from './depoimentos/depoimentoDiego';
import { DepoimentoIngresse } from './depoimentos/depoimentoIngresse';
import { DepoimentoSato } from './depoimentos/depoimentoSato';
import { DepoimentoDeborah } from './depoimentos/depoimentoDeborah';
import { DepoimentoGabriel } from './depoimentos/depoimentoGabriel';
import './secao_depoimentos.css';


export class SecaoDepoimentos extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h2 className="subtitulo-carrossel" color="#003E60">Opinião de quem contratou e foi contratado:</h2>
                <div className="container-fluid carrossel-depoimentos" id="secao-depoimentos">
                    <DepoimentoLucas />
                    <DepoimentoThabata />
                    <DepoimentoRenato />
                    <DepoimentoDiego />
                    <DepoimentoIngresse />
                    <DepoimentoSato/>
                    <DepoimentoDeborah/>
                    <DepoimentoGabriel />
                </div>    
            </div>
        )
    }
}
