import React, { Component } from 'react';
import './App.css';
import { Home } from './pages/home';
import ScrollUpButton from 'react-scroll-up-button'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
