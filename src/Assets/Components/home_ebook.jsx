import * as React from 'react';
import './home_ebook.css';
import Ebook from '../img/home_ebook.png'

export class HomeEbook extends React.Component {
    render() {
        return (
            <div className="" id="ebook-section">
            <div className="retangulo">
            </div>
                <div className="container ebook">
                    <img src={Ebook} alt="ebook do NEU" id="foto-ebook" />
                    <div className="col-md-6 col-sm-12" id="textos-ebook">
                        <h2 className="titulo-ebook">Guia para os futuros empreendedores</h2>
                        <p className="texto-ebook">Se interessa por empreendedorismo e não sabe por onde começar? Esse e-book foi preparado pelo NEU para ajudar você a dar os primeiros passos no seu negócio.</p>
                        <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary-yellow" href="#">Baixar guia</button>
                    </div>
                </div>
            </div>
        )
    }
}