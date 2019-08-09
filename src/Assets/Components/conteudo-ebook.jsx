import * as React from 'react';
import './como_funciona_ship.css';
import './conteudo-ebook.css';
import { TimelineEbook } from '../Components/timeline_ebook';
import ebook_img from '../img/home_ebook.png';


export class ConteudoEbook extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container margem-top">
                <h1 className="titulo-como-funciona-ship">O que você irá aprender:</h1>
                <div className="row">
                    <p className="texto-como-funciona-ship col-md-6">O e-book foi desenvolvido para trazer um <b>conteúdo rápido e mais acessível</b> aos alunos.
                                                                    O conteúdo deste arquivo envolve os seguintes tópicos:
                    </p>
                    <img src={ebook_img} alt="E-book" id="foto-ebook2"/>
                </div>
                <div className="container row">
                    <div>
                        <TimelineEbook />
                    </div>
                </div>
            </div>    
        )
    }
}