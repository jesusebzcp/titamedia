import React from "react";
import Lottie from "react-lottie";
import Dance from "../../assets/animations/dance.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Dance,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <div id={"container-loading"}>
      <div className={"content-loading"}>
        <Lottie options={defaultOptions} height={400} width={400} />
        <h2>Cargando....</h2>
      </div>
    </div>
  );
};

export default Loading;
