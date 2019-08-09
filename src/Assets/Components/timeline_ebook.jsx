import * as React from 'react';
import './timeline.css';
import './timeline_ebook.css';

export class TimelineEbook extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
                <div className="container">
                    <div className="margem-top-12em col-md-6">
                        <div>
                            <h4 className="titulo-timeline azul">1 - Como sei se sou empreendedor?</h4>
                            <p className="margem-top-1em">Muitos dos traços comportamentais envolvem a criação da pessoa, bem como a cultura na qual ela está inserida. Esses traços se desenvolvem ao longo da vida - e isso envolve o desenvolvimento dentro da Universidade.</p>
                        </div>
                        <div>
                            <h4 className="titulo-timeline margem-top-3em azul">2 - Como posso me desenvolver como empreendedor na USP?</h4>
                            <p className="margem-top-1em">Vamos lhe dar uma mão, indicando onde encontrar pessoas, instituições e recursos na Cidade Universitária que contribuem para o seu desenvolvimento como empreendedor.</p>
                        </div>
                        <div>
                            <h4 className="titulo-timeline margem-top-3em azul">3 - Tenho uma ideia. E agora?</h4>
                            <p className="margem-top-1em">A ideia é o primeiro passo na jornada da criação de um negócio. Aqui indicamos livros e conteúdos para ajudar no desenvolvimento dessa ideia.</p>
                        </div>
                        <div>
                            <h4 className="titulo-timeline margem-top-3em azul">4 - Tenho um negócio nascente . Qual o próximo passo?</h4>
                            <p className="margem-top-1em">Até mesmo empreendedores mais maduros podem se beneficiar no NEU, visto que a organização se encontra muito bem relacionada no mercado. Temos na nossa Rede diversos fundos de investimento, veículos midiáticos, aceleradoras, outras empresas, universidades, investidores e parceiros nacionais e internacionais que podem ajudar na alavancagem do negócio.</p>
                        </div>
                    </div>
                </div>
        )
    }
}