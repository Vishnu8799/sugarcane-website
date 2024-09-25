import React from "react";
// import ReactPlayer from 'react-player'
import ReactPlayer from "react-player/youtube";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div style={{ width: "100%" }}>
        <ReactPlayer
          loop={true}
          width={"98%"}
          height={"500px"}
          url="https://youtu.be/piVKEiGFO3c?si=biZyfWUx1ply3MXz"
          alt="Video not found"
        />
      </div>
      <div className="content">
        <h2>About Sugarcane</h2>
        <p>
          Sugarcane is a tropical, perennial grass that forms lateral shoots at
          the base to produce multiple stems. It is a major source of sugar and
          other products.
          <br></br>
          What Is Sugarcane? Sugarcane is a tropical grass that’s cultivated
          around the world to produce refined sugar, sugarcane juice, and
          medicinal products. Many types of sugar products are made from
          sugarcane, including: Refined white sugar Brown sugar Molasses Jaggery
          Sugarcane juice is one of the purest forms of sugarcane other than the
          plant stalks themselves. It has very few nutriaents but maintains more
          of the plant’s natural vitamins and minerals than more highly
          processed products. But it’s still considered to be an added sugar.
          Sugarcane has been cultivated in India and other parts of Southeast
          Asia for millennia. The Ayurveda and Unani systems of medicine use it
          to treat various ailments. But we need more research into the
          potential health benefits of natural sugarcane.
        </p>
      </div>
    </div>
  );
};

export default Home;
