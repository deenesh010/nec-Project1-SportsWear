import React from "react";
import Hero from "../components/Hero";
import jerseyData from "../data.js/jerseyData";
import ballItems from "../data.js/ballItems";
import otherData from "../data.js/otherData";

const Home = () => {
  return (
    <div>
      <Hero
        Data={jerseyData}
        head="Get Player's Grade Jersey At Sports Pitch"
      />
      <Hero Data={ballItems} head=" Get Playing Items At Sports Pitch" />
      <Hero Data={otherData} head=" Other Sporting Items" />
    </div>
  );
};

export default Home;
