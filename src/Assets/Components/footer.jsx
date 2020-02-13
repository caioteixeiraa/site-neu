import * as React from 'react';
import './footer.css';
import MapsInova from '../img/mapa-inovausp.png'
import {Navbar, Nav, NavbarCollapse, NavbarContext, NavbarBrand, NavbarToggle, NavContext, NavItem, NavLink} from 'react-bootstrap';


export class Footer extends React.Component{
    render() {
        return (
            <div className="container-fluid" id="footer-section">
                <h2 className="container titulo-footer texto-branco">Vamos conversar?</h2>
                <div className="container textos-foto">
                    <div className="row col-md-4">
                        <p className="texto-branco texto-footer">Venha conversar com a gente, estamos aqui para ajudar você a fazer parte do ecossistema de empreendedorismo na Universidade
                        de São Paulo.</p>
                        <h5 className="texto-branco titulo-maisinfo">Localização:</h5>
                        <p className="texto-branco mais-info">Cosmos@INOVAUSP<br/>Av. Prof. Lúcio Martins Rodrigues, 370,<br/>Cidade Universitária, Butantã,<br/>São Paulo-SP, 05508-020</p>
                        <h5 className="texto-branco titulo-maisinfo">Informações de contato:</h5>
                        <p className="texto-branco mais-info">E-mail: neu@uspempreende.org<br/>Facebook: facebook.com/uspempreende</p>
                    </div>
                    <img className="foto-maps" src={MapsInova} alt="Localização InovaLab" />
                </div>
                <div className="container-fluid linha-azul">
                </div>
                <div className="navbar-footer container">
                <Navbar expand="lg" className="navbar-comp">
                <Nav className="mr-auto">
                    <Nav.Link className="item-nav-footer" href="/Sobre"><div className="texto-branco">Sobre o NEU</div></Nav.Link>
                    <Nav.Link className="item-nav-footer" href="/StartupLab"><div className="texto-branco">Pré-aceleração</div></Nav.Link>
                    <Nav.Link className="item-nav-footer" href="/StartupShip"><div className="texto-branco">Estágios</div></Nav.Link>
                    <Nav.Link className="item-nav-footer" href="/Eventos"><div className="texto-branco">Eventos</div></Nav.Link>
                    <Nav.Link className="item-nav-footer" href="/Parcerias"><div className="texto-branco">Parcerias</div></Nav.Link>
                    <Nav.Link className="item-nav-footer" href="/Ebook"><div className="texto-branco">E-book</div></Nav.Link>
                    <Nav.Link className="item-nav-footer" href="/Cursos"><div className="texto-branco">Cursos Online</div></Nav.Link>
                    <Nav.Link className="item-nav-footer" href="/FaleConosco"><div className="texto-branco">Fale Conosco</div></Nav.Link>
                </Nav>
                </Navbar>
                </div>
                <div>
                    <p className="copyright-neu"> &copy; NÚCLEO DE EMPREENDEDORISMO DA USP. TODOS OS DIREITOS RESERVADOS.</p>
                </div>
            </div>
        )
    }
}