import React from "react";
import About from "../../Components/About/About";
import Contrast from "../../Components/Contrast/Contrast";
import Hero from "../../Components/Hero/Hero";
import Metaverse from "../../Components/Metaverse/Metaverse";
import PlayToEarn from "../../Components/PlayToEarn/PlayToEarn";
import Roadmap from "../../Components/Roadmap/Roadmap";
import Services from "../../Components/services/Services";
import Tokenomic from "../../Components/Tokenomic/Tokenomic";
import TokenUtility from "../../Components/TokenUtility/TokenUtility";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Contrast />
      <Metaverse />
      <PlayToEarn />
      <PlayToEarn />
      <Tokenomic />
      <Roadmap />
      <TokenUtility />
    </div>
  );
}

export default Home;
