import React, { useEffect } from "react";
import { Events, scrollSpy, animateScroll } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleAnimationScroll = () => {
    animateScroll.scrollMore(700, {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
    });
  };
  return (
    <div id={"container-hero"}>
      <div className={"content-hero"}>
        <h2>EXPLORE BEYOND HORIZON</h2>
        <p>
          Magna mundi referrentur quo, no rebum dignissim qui
          <br />
          Per quedsi accusata id, agam labores.
        </p>
        <div className={"container-button-hero"}>
          <button onClick={() => handleAnimationScroll()}>VIEW OUR WORK</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
