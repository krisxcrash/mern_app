import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Jumbotron from './components/Jumbotron.js';
import Module1 from './components/Module1.js';
import About from "./components/About.js";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Navbar />
      <Jumbotron />
      <Module1 />
      <About />
      </div>
    );
  }
}

export default App;
