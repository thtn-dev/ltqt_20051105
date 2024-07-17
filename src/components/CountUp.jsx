import { useRef, useEffect } from "react";
import { animate, useInView } from "framer-motion";
import { Text } from "@chakra-ui/react";

const AnimatedCounter = ({ from, to, duration, animationOptions }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion)").matches
    ) {
      element.textContent = String(to);
      return;
    }
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const controls = animate(from, to, {
      duration: duration,
      ease: easeOutExpo,
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to, animationOptions, duration]);

  return (
    <>
      <Text
        as="span"
        color={"white"}
        fontSize={"4rem"}
        fontWeight={"bold"}
        ref={ref}
      />{" "}
      <Text as="span" color={"white"} fontSize={"4rem"} fontWeight={"bold"}>
        &nbsp;ngày
      </Text>{" "}
    </>
  );
};

export default AnimatedCounter;
