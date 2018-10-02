import React, { Component } from 'react';

class Birdimage extends Component {
  render(props) {
    return (
      <div id="videoContainer">
        <div className="img"><img className="birdImage hue-hover" src={this.props.imageurl} /></div>
      </div>
    );
  }
}

export default Birdimage;