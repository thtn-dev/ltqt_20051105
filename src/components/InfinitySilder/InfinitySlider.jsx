import { Box } from "@chakra-ui/react";
import styles from "./InfinitySlider.module.css";

const slides = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
];

const InfinitySlider = () => {
  return (
    <Box className={styles.slider} mx={3} borderRadius={"xl"}>
      <div className={styles.slideTrack}>
        {slides.concat(slides).map((slide, index) => (
          <div key={index} className={styles.slide}>
            <img src={slide} height="100" width="250" alt="" />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default InfinitySlider;
