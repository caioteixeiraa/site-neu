import * as React from 'react';
import './home_parceiros.css'

export class StartupsParceiras extends React.Component{
    render() {
        return (
            <div className="container" id="parceiros-section">
                <h1 className="titulo container row">Startups parceiras</h1>
                <div className="row">
                    <div className="textos col-md-7">
                        <p className="texto">Essas são as startups que fazem parte da Rede NEU e já trabalharam conosco.
                        Graças a elas conseguimos trazer muitos materiais e eventos de qualidade.</p>
                    </div>
                </div>
                <img src={require(`../img/startups-rede.png`)} className="rede-neu" alt="" />
            </div>
        )
    }
}