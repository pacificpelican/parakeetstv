import React, { Component } from 'react';
import Parakeets from "./Parakeets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parakeets />
 
        <p className="none">
        <code>
          A site from <a href="http://danmckeown.info">Dan McKeown</a>
          </code>
        </p>
      </div>
    );
  }
}

export default App;
