import React from "react";
import "./Roadmap.css";

function Roadmap() {
  return (
    <div style={{ background: "000" }}>
      <div className="road__map__section">
        <div className="container">
          <div className="road__map__inner">
            <div className="title">
              <h1>ROADMAP</h1>
              <p>
                // <span>ROADMAP</span>
              </p>
            </div>

            <div className="timeline__section">
              <ul className="timeline">
                <li className="event">
                  <h1>PHASE 1</h1>
                  <div className="event__ul">
                    <ul>
                      <li>Project Development</li>
                      <li>Token website launch</li>
                      <li>LoopPverse launched!</li>
                    </ul>
                    <ul>
                      <li>Community (Telegram)</li>
                      <li>Media reports</li>
                      <li>Launch social media sites (Twitter)</li>
                    </ul>
                  </div>
                </li>
                <li className="event">
                  <h1>PHASE 2</h1>
                  <div className="event__ul">
                    <ul>
                      <li>Apply for listing on CoinGecko</li>
                      <li>Apply for listing on CoinMarketCap</li>
                      <li>Third party audit</li>
                    </ul>
                    <ul>
                      <li>Development of game NFT market</li>
                      <li>Game community (Discord)</li>
                      <li>Create a community foundation</li>
                    </ul>
                  </div>
                </li>
                <li className="event">
                  <h1>PHASE 3</h1>
                  <div className="event__ul">
                    <ul>
                      <li>Game NFT Series Released</li>
                      <li>Release competitive game for LOOPVERSE</li>
                    </ul>
                    <ul>
                      <li>Large influencer marketing push</li>
                      <li>More games and NFT</li>
                    </ul>
                  </div>
                </li>
                <li className="event">
                  <h1>PHASE 4</h1>
                  <div className="event__ul">
                    <ul>
                      <li>Debugging and testing of community vote (DAO)</li>
                      <li>Development of LOOPVERSE financial dapp</li>
                    </ul>
                    <ul>
                      <li>Website Redesign</li>
                      <li>100,000 Telegram members</li>
                      <li>Build additional worldwide Partnerships</li>
                    </ul>
                  </div>
                </li>
                <li className="event">
                  <h1>PHASE 5</h1>
                  <ul>
                    <li>Launching our NFT MARKETPLACE</li>
                    <li>Partnerships with tokens</li>
                    <li>Bridging to all other networks</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
