import React, { Component } from 'react';

import Birdimage from "./Birdimage";

class Birdcontent extends Component {
  render(props) {
    return (
      <div id="flockContainer">
        <section id="striker" className="box-shadow-fat kiwi">
          <h2><a href="http://pacificarchives.sf3am.com/projects/river/statuses/2009/2369/">Striker</a></h2>
          <Birdimage imageurl="http://photos.sf3am.com/gallery/var/resizes/Ava-Striker--parakeets-August2009.JPG" />
          <data-img-caption>Striker (R) with Ava</data-img-caption>
          <p className="tahoma-text lime-text-shadow">A "wild-type" bird who closely resembled his outdoor cousins in Australia in coloring and temperment, Striker was a big, fun, playful, friendly bird.  Along with Belle he was the first bird in the flock.
          </p>
        </section>
      </div>
    );
  }
}

export default Birdcontent;