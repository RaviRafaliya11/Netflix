import Lottie from "react-lottie";
import * as animation from "../../public/NetflixAnimation.json";

export default function IntroLoader() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="md:w-screen md:h-screen md:py-20">
      <Lottie options={defaultOptions1} />
    </div>
  );
}
