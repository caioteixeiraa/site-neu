import * as React from 'react';
import './botao-cta.css';

export class CTA extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (    
            <div className="container cta margem">
                <a href={this.props.href}>
                    <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary center" >{this.props.texto}</button>
                </a>
            </div>
        )
    }
}