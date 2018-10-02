import React, { Component } from 'react';

import './App.css';
import Birdvideo from "./Birdvideo";

class Parakeets extends Component {
  render() {
    return (
      <div id="keetsContainer">
        <div className="Parakeets">
          <header className="App-header">
            <h1 className="App-title">ParakeetsTV</h1>
          </header>
          <p className="App-intro">
            A Web Site About The McKeown Flock
        </p>
        </div>
        <Birdvideo videourl="http://links.danieljmckeown.com/library/images/BigParrotMilletPart2Dec2011byDanielJMcKeown.mov" />
      </div>
    );
  }
}

export default Parakeets;
