import Lottie from "lottie-react";
import data from "../data/lottie/tree_love_animation.json";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
const LoveTree = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const lottieRef = useRef();

  useEffect(() => {
    if (inView) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={true}
        autoplay={true}
        reversed={true}
      />
    </div>
  );
};
export default LoveTree;
