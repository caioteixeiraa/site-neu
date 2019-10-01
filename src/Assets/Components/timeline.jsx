import * as React from 'react';
import './timeline.css';
import icone_video from '../img/video-player.svg';
import icone_download from '../img/download-arrow.svg';

export class TimelineShip extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="margem-top col-md-6">
                    <div>
                        <h4 className="titulo-timeline">1 - Deixe seu contato conosco!</h4>
                        <p className="margem-top-1em">Preencha algumas informações para que possamos traçar seu perfil e te enviar as vagas que têm mais a ver com você.</p>
                        <a href="http://bit.ly/quero_estagiar_em_uma_startup" target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary margem-top-2em" href="#">Quero estagiar</button></a>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">2 - Entraremos em contato</h4>
                        <p className="margem-top-1em">Entraremos em contato para confirmarmos que você está interessado no StartupSHIP! Enquanto isso, o que acha de dicas para fazer um currículo?</p>
                        <a className="link row align-items-center margem-top-2em" href="../arquivos_download/Modelo de currículo 1.pdf">
                            <img className="icone-timeline" src={icone_download} alt=""/>
                            <h6 className="">Modelo de currículo</h6>
                        </a>
                        <a className="link row align-items-center margem-top-1em" href="../arquivos_download/Startupship _ Núcleo de empreendedorismo da usp.pdf" download>
                            <img className="icone-timeline" src={icone_download} alt=""/>
                            <h6 className="">Dicas de como montar um currículo</h6>
                        </a>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">3 - Encontramos a melhor vaga em startup para você</h4>
                        <p className="margem-top-1em">Vamos enviar para o seu e-mail as melhores vagas para o seu perfil, aí você preenche o formulário na vaga, anexa seu currículo, e nós enviamos para a startup.</p>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">4 - Aguarde o contato da startup</h4>
                        <p className="margem-top-1em">Depois de enviarmos o currículo para a startup, o que acha de aprender um pouco sobre entrevistas?</p>

                        <a className="link row align-items-center margem-top-3em" href="https://www.youtube.com/watch?v=2V6ijJqR608">
                            <img className="icone-timeline" src={icone_video} alt=""/>
                            <h6 className="">Vídeo - como se preparar para uma entrevista?</h6>
                        </a>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">5 - Mande-nos feedback do que achou!</h4>
                        <p className="margem-top-1em">Conta para a gente como foi sua experiência no StartupSHIP! Nosso time irá vibrar de saber que você conseguiu aquela vaga dos seus sonhos!</p>
                    </div>
                </div>
                <div className="container botoes-ship row">
                    <a href="http://bit.ly/quero_estagiar_em_uma_startup" target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary" href="#">Quero estagiar</button></a>
                    <a href="http://bit.ly/procuro_talentos_USP" target="_blank"><button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary" href="#">Tenho uma vaga</button></a>
                </div>
            </div>
        )
    }
}