import * as React from 'react';
import './numbers.css';

export class Numbers extends React.Component{
    constructor(props){
      super(props);
    }
    render() {
        return (
          <div>
            <div style={{flex: 2}}>
            </div>
            <div className="container content" style={{flex: 8}}>
              <div className="item col">
                <h2 className="number">{this.props.numero1}</h2>
                <p className="description">{this.props.descricao1_1}<br />{this.props.descricao1_2}</p>
              </div>
              <div className="item col">
                <h2 className="number">{this.props.numero2}</h2>
                <p className="description">{this.props.descricao2_1}<br />{this.props.descricao2_2}</p>
              </div>
              <div className="item col">
                <h2 className="number">{this.props.numero3}</h2>
                <p className="description">{this.props.descricao3_1}<br />{this.props.descricao3_2}</p>
              </div>
              <div className="item col">
                <h2 className="number">{this.props.numero4}</h2>
                <p className="description">{this.props.descricao4_1}<br />{this.props.descricao4_2}</p>
              </div>
            </div>
            <div style={{flex: 2}}>
            </div>
          </div>
        )
  }
}