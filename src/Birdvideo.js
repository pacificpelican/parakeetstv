import React, { Component } from 'react';

class Birdvideo extends Component {
  render(props) {
    return (
      <div id="videoContainer">
        <div className="video"><video controls="true" muted="true" loop="false" autoplay="true" className="birdVideo" src={this.props.videourl} /></div>
      </div>
    );
  }
}

export default Birdvideo;