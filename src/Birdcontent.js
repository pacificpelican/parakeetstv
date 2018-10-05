import React, { Component } from 'react';

import Birdimage from "./Birdimage";

import AvaImg from "./Ava-3293561590_3cbda89e76.jpg";
import DodgerImg from "./Dodger-4887734382_6a6efc744a_z.jpg";

class Birdcontent extends Component {
  render(props) {
    return (
      <div id="flockContainer">
        <section id="striker" className="box-shadow-fat kiwi">
          <h2 className="verdana-text"><a href="http://pacificarchives.sf3am.com/projects/river/statuses/2009/2369/">Striker</a></h2>
          <Birdimage imageurl="http://pics.sf3am.com/var/resizes/parakeets/Striker--close-up-2010-by-DanielJMcKeown.jpg" />
          <data-img-caption>Striker (profile)</data-img-caption>
          <p className="tahoma-text banana-text-shadow">A "wild-type" bird who closely resembled his outdoor cousins in Australia in coloring and temperment, Striker was a big, fun, playful, friendly bird.  First bird in the flock along with Belle.
          </p>
        </section>
        <section id="ava" className="box-shadow-fat pistachio">
          <h2 className="verdana-text"><a href="http://pacificarchives.sf3am.com/projects/river/statuses/2009/2379/">Ava</a></h2>
          <Birdimage imageurl={AvaImg} />
          <data-img-caption>Ava on the cage roof</data-img-caption>
          <p className="tahoma-text wheat-text-shadow">An army-green little bird, Ava brought a very sweet energy and was an amazing flyer, earning the title "Ava the Aviator." Fourth in the flock.
          </p>
        </section>
        <section id="sparta" className="box-shadow-fat banana">
          <h2 className="verdana-text"><a href="http://pacificarchives.sf3am.com/projects/river/statuses/2009/2263/">Sparta</a></h2>
          <Birdimage imageurl="http://pics.sf3am.com/var/resizes/Sparty-by-Jessica--April2010-byDanielJMcKeown.jpg" />
          <data-img-caption>Sparta by Jessica</data-img-caption>
          <p className="tahoma-text lime-text-shadow">A tall, assertive, yellow bird who was very cereberal and beautiful and mischevious. Third to join.
          </p>
        </section>
        <section id="dodger" className="box-shadow-fat navy-blue">
          <h2 className="verdana-text"><a href="http://pacificarchives.sf3am.com/oggcast/dodger-climbs/?/oggcast/dodger-climbs/">Dodger</a></h2>
          <Birdimage imageurl={DodgerImg} />
          <data-img-caption>Dodger by Jessica</data-img-caption>
          <p className="tahoma-text cotton-candy-text-shadow">A very chill bird, Dodger was a blue and white budgie who was a patient, diplomatic prescence in the flock.  Fifth bird to be added.
          </p>
        </section>
        <section id="belle" className="box-shadow-fat blue-candy">
          <h2 className="verdana-text"><a href="http://pacificarchives.sf3am.com/projects/river/statuses/2009/2373/">Belle</a></h2>
          <Birdimage imageurl="http://pics.sf3am.com/var/resizes/Belle-the-parakeet-by-JessicaMcKeown-9-10-2010.jpg" />
          <data-img-caption>Belle perching by Jessica</data-img-caption>
          <p className="tahoma-text cotton-candy-text-shadow">A legendary bird who loved humans and animals alike, Belle was a beautiful companion and a loyal friend for many years.  Co-first with Striker.
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