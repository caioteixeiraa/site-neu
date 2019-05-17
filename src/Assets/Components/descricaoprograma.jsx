import * as React from 'react';
import './descricaoprograma.css'

export class DescricaoPrograma extends React.Component{
    render() {
        return (
            <div className="bloco container">
                <h1 className="titulo container row">Estágios em Startups</h1>
                <h3 className="subtitulo container row">Quer estagiar em uma startup?</h3>
                <div className="row">
                    <div className="textos col-md-6">
                        <p className="texto">O StartupSHIP é o programa de conexão de alunos USP com as startups da nossa Rede.Temos como objetivo inserir alunos 
                        no ecossistema de empreendedorismo para que adquiram muito aprendizado em um ambiente de autonomia. Se você é de uma startup e tem uma 
                        vaga de estágio, entre em contato conosco:</p>
                    </div>
                </div>
                <div className="botoes row">
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary" href="#">Quero estagiar</button>
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary" href="#">Tenho uma vaga</button>
                </div>
            </div>
        )
    }
}