import React from "react";
import metaversegif from "../../assets/giphy (2).gif";

function Metaverse() {
  return (
    <div>
      <div
        className="services__section "
        style={{ backgroundImage: "url(assets/servicesbg.png)" }}
      >
        <div className="container py-120">
          <div className="service__inner">
            <p className="text-right">SERVICES //</p>
            <div className="services__title">
              <h1>
                KEY TENETS OF <br />
                THE METAVERSE
              </h1>
              <img src={metaversegif} alt="" />
            </div>
            <div className="service__slider">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="service__quad service">
                    <img src="assets/servicesslide1.png" alt="" />
                    <h4>
                      DECENTRALIZED <br />
                      GOVERNANCE
                    </h4>
                    <p>
                      As an interconnected ecosystem of both
                      community-contributed and business-developed services,
                      decentralized governance will be needed to ensure the
                      Metaverse develops along the lines its users prefer.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service__quad service">
                    <img src="assets/servicesslide2.png" alt="" />
                    <h4>NON-FUNGIBLE ASSETS</h4>
                    <p>
                      Non-fungible tokens will play a crucial role in the
                      Metaverse - being used torepresent domains, digital
                      real-estate, user avatars, digital rights and access
                      passes, and much more. As the utility of NFTs becomes
                      better explored, they will almost certainly become a
                      cornerstone technology of the Metaverse.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service__quad">
                    <img src="assets/servicesslide3.png" alt="" />
                    <h4>DIGITAL IDENTITY</h4>
                    <p>
                      A persistent digital world requires a consistent digital
                      identity to navigate. Decentralized identity solutions
                      will prove crucial in ensuring that users can seamlessly
                      venture throughout the Metaverse without needlessly
                      shedding personal information to data mining corporations.
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

export default Metaverse;
