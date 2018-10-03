import React, { Component } from 'react';

import Birdimage from "./Birdimage";

class Birdcontent extends Component {
  render(props) {
    return (
      <div id="flockContainer">
        <section id="striker" className="box-shadow-fat kiwi">
          <h2 className="verdana-text"><a href="http://pacificarchives.sf3am.com/projects/river/statuses/2009/2369/">Striker</a></h2>
          <Birdimage imageurl="http://photos.sf3am.com/gallery/var/resizes/Ava-Striker--parakeets-August2009.JPG" />
          <data-img-caption>Striker (R) with Ava</data-img-caption>
          <p className="tahoma-text banana-text-shadow">A "wild-type" bird who closely resembled his outdoor cousins in Australia in coloring and temperment, Striker was a big, fun, playful, friendly bird.  First bird in the flock along with Belle.
          </p>
        </section>
        <section id="sparta" className="box-shadow-fat banana">
          <h2 className="verdana-text"><a href="http://pacificarchives.sf3am.com/projects/river/statuses/2009/2263/">Sparta</a></h2>
          <Birdimage imageurl="http://pics.sf3am.com/var/resizes/Sparty-by-Jessica--April2010-byDanielJMcKeown.jpg" />
          <data-img-caption>Sparta by Jessica</data-img-caption>
          <p className="tahoma-text lime-text-shadow">A tall, assertive, yellow bird who was very cereberal and beautiful and mischevious. Third to join.
          </p>
        </section>
        <section id="belle" className="box-shadow-fat blue-candy">
          <h2 className="verdana-text"><a href="http://pacificarchives.sf3am.com/projects/river/statuses/2009/2373/">Belle</a></h2>
          <Birdimage imageurl="" />
          <data-img-caption></data-img-caption>
          <p className="tahoma-text cotton-candy-text-shadow">A legendary bird who loved humans and animals alike, Belle was a beautiful companion and a loyal friend for many years.  Co-first with Striker.
          </p>
        </section>
        <section id="ava" className="box-shadow-fat pistachio">
          <h2 className="verdana-text"><a href="">Ava</a></h2>
          <Birdimage imageurl="" />
          <data-img-caption></data-img-caption>
          <p className="tahoma-text wheat-text-shadow">An army-green little bird, Ava brought a very sweet energy and was an amazing flyer, earning the title "Ava the Aviator." Fourth in the flock.
          </p>
        </section>
        <section id="dodger" className="box-shadow-fat navy-blue">
          <h2 className="verdana-text"><a href="">Dodger</a></h2>
          <Birdimage imageurl="" />
          <data-img-caption></data-img-caption>
          <p className="tahoma-text cotton-candy-text-shadow">
          </p>
        </section>
        <section id="bogey" className="box-shadow-fat pool-water">
          <h2 className="verdana-text"><a href="">Bogey</a></h2>
          <Birdimage imageurl="" />
          <data-img-caption></data-img-caption>
          <p className="tahoma-text wheat-text-shadow">
          </p>
        </section>
      </div>
    );
  }
}

export default Birdcontent;