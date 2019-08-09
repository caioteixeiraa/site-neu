import * as React from 'react';
import './lab_cases.css';
import './startups-piratas.css';

export class StartupsPiratas extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (    
            <div className="container cases-de-sucesso">
                <div className="container row align-items-center space">
                    <div className="col-md-2 texto-cases texto-2em margem">
                        <h4>Startups participantes:</h4>
                    </div>
                    <div className="col-md-9 logo-startups-lab ">
                        <a href="#" target="_blank" className="resp">
                            <img className="img-6em responsive margem" src={require(`../img/logos-startups/${this.props.logo1}`)} alt=""/>
                        </a>
                        <a href="#" target="_blank" className="resp">
                            <img className="img-9em responsive margem" src={require(`../img/logos-startups/${this.props.logo2}`)} alt=""/>
                        </a>
                        <a href="#" target="_blank" className="resp">
                            <img className="img-11em responsive margem" src={require(`../img/logos-startups/${this.props.logo3}`)} alt=""/>
                        </a>
                        <a href="#" target="_blank" className="resp">
                            <img className="img-9em responsive margem" src={require(`../img/logos-startups/${this.props.logo4}`)} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}