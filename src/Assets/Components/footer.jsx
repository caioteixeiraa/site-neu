import * as React from 'react';
import './footer.css';
import MapsInova from '../img/screencapture-google-maps-place-InovaLab-Poli-23-5570386-46-7320631-18z-data-4m5-3m4-1s0x0-0xcac47aef5f2195ef-8m2-3d-23-5567047-4d-46-7331657-2019-03-.png'

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
                        <p className="texto-branco mais-info">InovaLab@Poli<br/>Av. Luciano Gualberto, 1380<br/>Cidade Universitária, São Paulo-SP<br/>Prédio da Engenharia de Produção - Poli USP</p>
                        <h5 className="texto-branco titulo-maisinfo">Informações de contato:</h5>
                        <p className="texto-branco mais-info">E-mail: neu@uspempreende.org<br/>Facebook: facebook.com/uspempreende</p>
                    </div>
                    <img className="foto-maps" src={MapsInova} alt="Localização InovaLab" />
                </div>
                <div className="container-fluid linha-azul">
                </div>
                <div className="navbar-footer container">
                        <a className= "item-nav-footer" href="#">Sobre o NEU</a>
                        <a className= "item-nav-footer" href="/StartupLAB">Pré-aceleração</a>
                        <a className= "item-nav-footer" href="/StartupSHIP">Estágios</a>
                        <a className= "item-nav-footer" href="#">Eventos</a>
                        <a className= "item-nav-footer" href="#">Parcerias</a>
                        <a className= "item-nav-footer" href="#">E-book</a>
                        <a className= "item-nav-footer" href="#">Cursos Online</a>
                        <button type="button col-lg-6 col-md-6 col-sm-8 col-xs-2" className="button-secondary-footer" href="#">Fale Conosco</button>
                </div>
                <div>
                    <p className="copyright-neu"> &copy; NÚCLEO DE EMPREENDEDORISMO DA USP. TODOS OS DIREITOS RESERVADOS.</p>
                </div>
            </div>
        )
    }
}