import * as React from 'react';
import './botao-cta.css'

export class CTA2 extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (    
            <div className="container botoes-ship">
                <div className="row cta-center">
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary"   id="button1" href="#">{this.props.texto1}</button>
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary" id="button2" href="#">{this.props.texto2}</button>
                </div>
            </div>
        )
    }
}
