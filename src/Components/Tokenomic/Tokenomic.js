import React from "react";
import layerCircle from "../../assets/Circlelayer.png";
import layerBox from "../../assets/Textlayer.png";
import "./style.css";

function Tokenomic() {
  return (
    <div className="tokenomic py-120">
      <div className="contentrokenomic">
        <p className="tagTokenomic">//about Us</p>
        <div className="row">
          <div className="col-md-6">
            <div className="titlediv">
              <h1 className="title">Tokenomic</h1>
            </div>
          </div>
          <div className="col-md-6 imagegroup">
            <div className="imgBox">
              <img src={layerBox} alt="" />
            </div>
            <div className="imgLayer">
              <img src={layerCircle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomic;
