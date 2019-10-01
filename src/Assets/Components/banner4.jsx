import * as React from 'react';
import './banner4.css';
import { NavbarNEU } from './navbar';

export class Banner4 extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="home-banner4">
                <NavbarNEU />
                <div className="container banner-content">
                </div>
            </div>
        )
    }
}