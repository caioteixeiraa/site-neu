import * as React from 'react';
import './banner3.css';
import { NavbarNEU } from './navbar';

export class Banner3 extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="home-banner3">
                <NavbarNEU />
                <div className="container banner-content">
                </div>
            </div>
        )
    }
}