import * as React from 'react';
import './timeline.css';
import icone_video from '../img/video-player.svg';
import icone_download from '../img/download-arrow.svg';
import icone_user from '../img/user.svg';
import { CTA } from '../Components/botao-cta';

export class TimelineLab extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="margem-top col-md-6">
                    <div>
                        <h4 className="titulo-timeline">1 - Perfil e Comportamento</h4>
                        <p className="margem-top-1em">Desenvolva as primeiras habilidades e a mentalidade empreendedora.</p>
                        <a className="link row align-items-center margem-top-2em" href="https://www.youtube.com/watch?v=O0biYyoQc2Y" target="_blank">
                            <img className="icone-timeline" src={icone_video} alt=""/>
                            <h6 className="">Vídeo - por que empreender?</h6>
                        </a>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">2 - Entendendo oportunidades</h4>
                        <p className="margem-top-1em">Explore o tamanho do seu mercadoe quanto ele movimenta de dinheiro.</p>
                        <div className="row align-items-center margem-top-2em">
                            <img className="icone-timeline" src={icone_user} alt=""/>
                            <h6 className="no-link">Bate-papo com mentor da Rede NEU</h6>
                        </div>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">3 - Entendendo seu usuário</h4>
                        <p className="margem-top-1em">Descubra tudo sobre eles com muitas entrevistas e outras ferramentas para desenvolvimento de personas.</p>
                        <a className="link row align-items-center margem-top-2em" href="https://www.youtube.com/watch?v=1Evwgu369Jw" target="_blank">
                            <img className="icone-timeline" src={icone_video} alt=""/>
                            <h6 className="">Empatia</h6>
                        </a>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">4 - Canvas e modelos de negócios</h4>
                        <p className="margem-top-1em">Familiarize-se com esta ferramenta estratégica e construa os seus Canvas Proposta de Valore Business Model Canvas.</p>
                        <a className="link row align-items-center margem-top-2em" href="../arquivos_download/Canvas_NEU_V6-2018072018.pdf" download>
                            <img className="icone-timeline" src={icone_download} alt=""/>
                            <h6 className="">Modelo do Canvas em PDF</h6>
                        </a>
                        <a className="link row align-items-center margem-top-1em" href="https://youtu.be/kCWTeDZpUHY" target="_blank">
                            <img className="icone-timeline" src={icone_video} alt=""/>
                            <h6 className="">Como usar o canvas de modelo de negócios</h6>
                        </a>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">5 - Construção do MVP</h4>
                        <p className="margem-top-1em">Aprenda a construir seu Mínimo Produto Viável da maneira mais rápida, eficiente e barata.</p>
                        <a className="link row align-items-center margem-top-2em" href="https://www.youtube.com/watch?v=et95f_cwNnw" target="_blank">
                            <img className="icone-timeline" src={icone_video} alt=""/>
                            <h6 className="">O que é um MVP?</h6>
                        </a>
                    </div>
                    <div>
                        <h4 className="titulo-timeline margem-top-3em">6 - Validação do MVP</h4>
                        <p className="margem-top-1em">Teste seu produto e valide as hipóteses que sua equipe criou durante o processo de Construção do MVP.</p>
                    </div>
                </div>

                <CTA 
                href="http://bit.ly/typeformLab"
                texto="Inscrever-me"/>

            </div>
        )
    }
}