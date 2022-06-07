import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="content">
        <h1 className="title1">LOOPVERSE</h1>
        <h3 className="title2">Changing The Crypto Space</h3>
        <p className="pera">
          A Metaverse where you can play games, create experiences and earn
          rewards
        </p>

        <div className="herobuton">
          <button className="buybtn">Buy On Pancakeswap</button>
          <button className="ml-3 whitebtn">Whitepaper</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
