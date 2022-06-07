import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="services ">
      <div className="contentAbout">
        <p className="tagtitle">
          services <span className="tag">//</span>{" "}
        </p>
        <div className="main-about">
          <div className="row">
            <div className="col-xl-6 col-12">
              <div className="aboutimg"></div>
            </div>
            <div className="col-xl-6  col-12">
              <h1 className="title1">LOOPVERSE OPPORTUNITY!</h1>
              <p className="pera">
                The LOOPVERSE aims to provide an entrepreneur-friendly
                ecosystem, which encourages users to start their own businesses
                and hire others to work for them. If starting a business sounds
                too complicated, users are also able to work as a Galaxy
                Wanderer, looting and mining on different planets. There are
                infinite possibilities and business ideas in the
              </p>
              <p className="tagtitle2">LOOPVerse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
