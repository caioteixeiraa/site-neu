import * as React from 'react';
import './banner-fale-conosco.css';
import { NavbarNEU } from './navbar';

export class BannerFaleConosco extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="fale-conosco-banner">
                <NavbarNEU />
                <div className="container banner-content">
                </div>
            </div>
        )
    }
}