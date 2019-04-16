import * as React from 'react';
import './pillars.css';

export class Pillars extends React.Component{
    render() {
        return (
            <div className="container-fluid row pilares">
                <hr id="linha" />
                <div className="container row circulos">
                    <div className="circle-minor">
                        <p>Inspiração</p>
                    </div>
                    <div className="circle-major">
                        <p>Capacitação</p>
                    </div>
                    <div className="circle-minor">
                        <p>Conexão</p>
                    </div>
                </div>
            </div>
        )
    }
}