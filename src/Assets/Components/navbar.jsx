import * as React from 'react';
import './navbar.css';
import logo from '../img/logo-neu (1).png' 

export class Navbar extends React.Component{
    render() {
        return (
            <div className="navbar-comp container">
                <nav className="navbar navbar-expand-lg navbar-dark">

                <a className="navbar-brand" href="/"><img className="logo-neu"src={logo} alt="logo-neu" /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                    aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <section className="collapse navbar-collapse flex-end" id="navbarMainToggler">
                    <div className="navbar-nav">
                    <ul>
                        <li><a className="nav-item nav-link" href="#">Sobre o NEU</a></li>
                        <li><a className="nav-item nav-link" href="#">Pré-aceleração</a></li>
                        <li><a className="nav-item nav-link" href="/StartupSHIP">Estágios</a></li>
                        <li><a className="nav-item nav-link" href="#">Eventos</a></li>
                        <li><a className="nav-item nav-link" href="#">Parcerias</a></li>
                        <li><a className="nav-item nav-link" href="#">E-book</a></li>
                        <li><a className="nav-item nav-link" href="#">Cursos Online</a></li>
                        <li><a className="nav-item nav-link" href="#">Fale Conosco</a></li>
                    </ul>
                    </div>
                </section>

                </nav>
            </div>
        )
    }
}