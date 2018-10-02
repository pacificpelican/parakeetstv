import React, { Component } from 'react';

class Birdvideo extends Component {
  render(props) {
    return (
      <div id="videoContainer">
        <div className="video"><video autoplay="true" className="birdVideo" src={this.props.videourl} /></div>
      </div>
    );
  }
}

export default Birdvideo;