import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <div className="contentAbout">
        <p className="tag">//about Us</p>
        <div className="main-about">
          <div className="row">
            <div className="col-xl-7 col-12">
              <h1 className="title1">WHAT IS LOOVPERSE</h1>
              <p className="pera">
                The LOOPVERSE To provide users with a decentralized platform to
                socialize from around the world and play to earn, the LOOPVerse
                is establishing a metaverse with the integration of NFTs. In
                this virtual multi-planet metaverse, users can connect with
                friends, experience different cultures and lifestyles, create
                NFT items, start businesses and explore the universe. The
                LOOPVerse provides a fair chance to every resident in the
                galaxy,with the community being governed by users with LOOPVerse
                Token (LPV$)
              </p>
            </div>
            <div className="col-xl-5 col-12">
              <div className="aboutimg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
