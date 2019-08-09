import * as React from 'react';
import './areas-piratas.css';
import { SecaoIcones } from './secao_icones';

export class AreasPiratas extends React.Component{
    render() {
        return (
            <div className="margem">
                <SecaoIcones
                tituloh2="Sobre as áreas"
                icone_1="mkt"
                subtituloh4_1="Ciência dos dados (Data Science)"
                texto_1="Curso voltado aos alunos que desejam iniciar na carreira de Data Science, passando pelos conteúdos básicos de análise, visualização e manipulação de dados."
                icone_2="mkt"
                subtituloh4_2="Design e User Experience"
                texto_2="Destinado aos alunos que desejam aprender mais sobre princípios de Design, aplicando na prática conceitos de UX, UI e User Research."
                icone_3="mkt"
                subtituloh4_3="Marketing de performance"
                texto_3="Curso voltado a alunos interessados em aprender conceitos de Marketing Digital, otimização de sites e SEO, publicidade e visualização de dados de Analytics." />
            </div>
        )
    }
}