import * as React from 'react';
import './bannerEbook.css';
import { NavbarNEU } from './navbar';

export class BannerEbook extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="banner-ebook">
                <NavbarNEU />
                <div className="container banner-content">
                </div>
            </div>
        )
    }
}