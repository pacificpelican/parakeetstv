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
          <p className="App-link">
            <a href="/latest">Latest</a>
          </p>
          <p className="App-link">
            <a href="https://www.youtube.com/watch?v=tvVrjK9sRb4&list=PLe0qZrpx7auKbXhF5xE99b980PFbVv2Q8">YouTube</a>
          </p>
          <p className="App-link">
            <a href="http://blogs.sf3am.com/parakeets">Blog</a>
          </p>
        </div>
        <Birdvideo videourl="http://djmcloud.danieljmckeown.com/wp-content/uploads/2011/12/BigParrotMilletPart1ByDanielJMcKeown2011Dec06.mov" />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Birdcontent />
      </div>
    );
  }
}

export default Parakeets;
