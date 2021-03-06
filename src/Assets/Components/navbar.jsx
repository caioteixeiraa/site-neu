import * as React from 'react';
import './navbar.css';
import logo from '../img/logo-neu.png';
import {Navbar, Nav} from 'react-bootstrap';

export class NavbarNEU extends React.Component{
    render() {
        return (
            <div>
                <div className="container" id="navbar">
                    <Navbar expand="lg" className="navbar-comp">
                    <Navbar.Brand href="/"><img className="logo-neu"src={logo} alt="logo-neu" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="texto-branco"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={window.location.pathname === "/Sobre" ? "nav-item sublinhado": "nav-item"} href="/Sobre"><div className="texto-branco">Sobre o NEU</div></Nav.Link>
                        <Nav.Link className={window.location.pathname === "/StartupLab" ? "nav-item sublinhado": "nav-item"} href="/StartupLab"><div className="texto-branco">Pré-aceleração</div></Nav.Link>
                        <Nav.Link className={window.location.pathname === "/StartupShip#" ? "nav-item sublinhado": "nav-item"} href="/StartupShip"><div className="texto-branco">Estágios</div></Nav.Link>
                        <Nav.Link className={window.location.pathname === "/Eventos" ? "nav-item sublinhado": "nav-item"} href="/Eventos"><div className="texto-branco">Eventos</div></Nav.Link>
                        <Nav.Link className={window.location.pathname === "/Parcerias" ? "nav-item sublinhado": "nav-item"} href="/Parcerias"><div className="texto-branco">Parcerias</div></Nav.Link>
                        <Nav.Link className={window.location.pathname === "/Ebook" ? "nav-item sublinhado": "nav-item"} href="/Ebook"><div className="texto-branco">E-book</div></Nav.Link>
                        <Nav.Link className={window.location.pathname === "/Cursos" ? "nav-item sublinhado": "nav-item"} href="/Cursos"><div className="texto-branco">Cursos Online</div></Nav.Link>
                        <Nav.Link className={window.location.pathname === "/FaleConosco" ? "nav-item sublinhado": "nav-item"} href="/FaleConosco"><div className="texto-branco">Fale Conosco</div></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
                <div id="divisorNav"></div>
            </div>
        )
    }
}