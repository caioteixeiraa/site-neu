import * as React from 'react';
import './descricaoprograma.css';
import './fale-conosco-component.css';

export class FaleConoscoComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bloco container">
                <h1 className="titulo container row">{this.props.title}</h1>
                <h3 className="subtitulo container row">{this.props.subtitle}</h3>
                <div className="row">
                    <div className="textos col-md-6">
                        <p className="texto">{this.props.text}</p>
                    </div>
                </div>
                <form action="mailto:tex.caio@gmail.com?subject=Contato pelo site" method="post" enctype="text/plain">
                    <label className="azul-bold">
                        Seu e-mail:
                    </label>
                    <br/>
                    <input className="input-contact" type="text" placeholder="E-mail" />
                    <br/>
                    <br/>
                    <label className="azul-bold">
                        Conte o que deseja saber:
                    </label>
                    <br/>
                    <textarea className="input-contact" rows="10" cols="50" name="comments"></textarea>
                    <br/>
                    <br/>
                    <button className="button-primary" type="submit">Enviar e-mail</button>

                </form>
            </div>
        )
    }
}