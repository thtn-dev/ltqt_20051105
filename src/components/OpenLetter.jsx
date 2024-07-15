import Lottie from "lottie-react";
import data from "../data/lottie/letter_open_animation.json";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
function OpenLetter() {
  const lottieRef = useRef(null);
  const handleClickAndStart = () => {
    lottieRef.current.play();
  };
  return (
    <Box onClick={handleClickAndStart} cursor={"pointer"} h={32} w={32}>
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        style={{ width: "100%", height: "100%" }}
        autoplay={false}
      />
    </Box>
  );
}

export default OpenLetter;
