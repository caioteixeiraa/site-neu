import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home';
import { StartupShipPage } from './pages/startupship';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { StartupLabPage } from './pages/startuplab';
import { SobreNEU } from './pages/sobre';
import { Ebook } from './pages/ebook';
import { Eventos } from './pages/eventos';
import { Cursos } from './pages/cursos';
import { Parcerias } from './pages/parcerias';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/StartupSHIP" component={StartupShipPage} />
        <Route path="/StartupLAB" component={StartupLabPage} />
        <Route path="/Sobre" component={SobreNEU} />
        <Route path="/Ebook" component={Ebook} />
        <Route path="/Eventos" component={Eventos} />
        <Route path="/Cursos" component={Cursos} />
        <Route path="/Parcerias" component={Parcerias} />
      </div>
    </Router>
    
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
