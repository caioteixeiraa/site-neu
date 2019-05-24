import * as React from 'react';
import './secao_icones.css';
import IconeHappiness from '../img/happiness.svg';
import IconeWork from '../img/working-briefcase.svg';
import IconeLike from '../img/like.svg';

export class SecaoIcones extends React.Component{
    render() {
        return (
            <div className="container margem-top-secao-icones">
                <h2 className="titulo-secao-icones">Porque estagiar em uma startup</h2>
                <div className="container row justificado">
                    <div className="col-md-3 item-secao-icones">
                        <div className="margem-top3em">
                            <img src={IconeHappiness} alt="" className="icone-secao-icones" />
                        </div>
                        <div className="subtitulo-secao-icones">
                            <h4>Ambiente de aprendizado</h4>
                        </div>
                        <div className="texto-secao-icones">
                            <p>O trabalho em uma startup irá te proporcionar um aprendizado inigualável! Você vai sentir que está fazendo 
                                a diferença dentro da empresa!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 item-secao-icones">
                        <div className="margem-top3em">
                            <img src={IconeWork} alt="" className="icone-secao-icones"/>
                        </div>
                        <div className="subtitulo-secao-icones">
                            <h4>Oportunidade de crescer na empresa</h4>
                        </div>
                        <div className="texto-secao-icones">
                            <p>Trabalhar numa startup é vê-la crescer e saber que você está crescendo exponencialemnte assim como ela.</p>
                        </div>
                    </div>
                    <div className="col-md-3 item-secao-icones">
                        <div className="margem-top3em">
                            <img src={IconeLike} alt="" className="icone-secao-icones" />
                        </div>
                        <div className="subtitulo-secao-icones">
                            <h4>Descontração e mão na massa</h4>
                        </div>
                        <div className="texto-secao-icones">
                            <p>O ambiente de uma startup é muitas vezes descontraído, dando prioridade para que seus funcionários se sintam confortáveis.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}