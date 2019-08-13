import * as React from 'react';
import './banner-cursos.css';
import { NavbarNEU } from './navbar';

export class BannerCursos extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="home-banner-cursos">
                <NavbarNEU />
                <div className="container banner-content">
                </div>
            </div>
        )
    }
}