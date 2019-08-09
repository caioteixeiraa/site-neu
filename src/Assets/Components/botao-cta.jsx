import * as React from 'react';

export class CTA extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (    
            <div className="container cta margem">
                <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-primary center" href="#">{this.props.texto}</button>
            </div>
        )
    }
}