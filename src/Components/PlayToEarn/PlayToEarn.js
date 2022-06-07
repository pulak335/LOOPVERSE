import React from "react";
import "./PlayToEarn.css";

function PlayToEarn() {
  return (
    <div
      className="mt-120"
      style={{
        backgroundColor: "#000",
      }}
    >
      <div
        className="about__us__section"
        style={{
          backgroundImage: "url(assets/about__usbg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-120">
          <div className="about__us__inner">
            <p className="text-left">// ABOUT US</p>
            <div className="row align-items-center">
              <div className="col-xl-7 col-md-12">
                <div className="play__earn">
                  <div className="title">
                    <h1>
                      <a href="#">PLAY-TO-EARN</a>
                    </h1>
                    <p>
                      Start Your Journey InSpace As A Bounty Hunter. Click to
                      explore
                    </p>
                    <span>
                      Your mission, should you choose to accept it? Find and
                      build the best Alien. Equip them with the strongest and
                      rarest items and use your Planets and Ships cards to build
                      an alien and grow your collection.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-12">
                <div className="about__us__quad">
                  <div className="service__quad text-center">
                    <img src="assets/play__earn1.png" alt="" />
                    <h4>V - DAO</h4>
                    <p>
                      As an interconnected ecosystem of both
                      community-contributed and business-developed services,
                      decentralized governance will be needed to ensure the
                      Metaverse develops along the lines its users prefer.
                    </p>
                  </div>
                  <div className="service__quad text-center">
                    <img src="assets/play__earn2.png" alt="" />
                    <h4>COMMUNITY</h4>
                    <p>
                      As an interconnected ecosystem of both
                      community-contributed and business-developed services,
                      decentralized governance will be needed to ensure the
                      Metaverse develops along the lines its users prefer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayToEarn;
