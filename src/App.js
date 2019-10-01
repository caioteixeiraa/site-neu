import React, { Component } from 'react';
import './App.css';
import { Home } from './pages/home';
import ScrollUpButton from 'react-scroll-up-button'; 
import ReactGA from 'react-ga';


class App extends Component {
  render() {

    function initializeReactGA() {
      ReactGA.initialize('UA-50740831-2');
      ReactGA.pageview('/homepage');
  }
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
