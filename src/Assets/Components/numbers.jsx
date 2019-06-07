import * as React from 'react';
import './numbers.css';

export class Numbers extends React.Component{
    constructor(props){
      super(props);
    }
    render() {
        return (
          <div className="container margem-top">
            <div>
            </div>
            <div className="container content row">
              <div className="item col-md-3">
                <h2 className="number">{this.props.numero1}</h2>
                <p className="description">{this.props.descricao1_1}<br />{this.props.descricao1_2}</p>
              </div>
              <div className="item col-md-3">
                <h2 className="number">{this.props.numero2}</h2>
                <p className="description">{this.props.descricao2_1}<br />{this.props.descricao2_2}</p>
              </div>
              <div className="item col-md-3">
                <h2 className="number">{this.props.numero3}</h2>
                <p className="description">{this.props.descricao3_1}<br />{this.props.descricao3_2}</p>
              </div>
              <div className="item col-md-3">
                <h2 className="number">{this.props.numero4}</h2>
                <p className="description">{this.props.descricao4_1}<br />{this.props.descricao4_2}</p>
              </div>
            </div>
            <div>
            </div>
          </div>
        )
  }
}