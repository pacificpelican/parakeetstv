import React, { Component } from 'react';

import './App.css';
import Birdvideo from "./Birdvideo";
import Birdcontent from "./Birdcontent";

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
        <Birdcontent />
      </div>
    );
  }
}

export default Parakeets;
