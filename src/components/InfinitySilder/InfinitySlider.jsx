import { Box } from "@chakra-ui/react";
import styles from "./InfinitySlider.module.css";

const slides = [
  "https://th.bing.com/th/id/R.bf9d837c09e96afe586de1780953fa43?rik=uBQuHqMtCT53jA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.bf9d837c09e96afe586de1780953fa43?rik=uBQuHqMtCT53jA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.bf9d837c09e96afe586de1780953fa43?rik=uBQuHqMtCT53jA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.bf9d837c09e96afe586de1780953fa43?rik=uBQuHqMtCT53jA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.bf9d837c09e96afe586de1780953fa43?rik=uBQuHqMtCT53jA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.bf9d837c09e96afe586de1780953fa43?rik=uBQuHqMtCT53jA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.bf9d837c09e96afe586de1780953fa43?rik=uBQuHqMtCT53jA&pid=ImgRaw&r=0",
];

const InfinitySlider = () => {
  return (
    <Box className={styles.slider}>
      <div className={styles.slideTrack}>
        {slides.concat(slides).map((slide, index) => (
          <div key={index} className={styles.slide}>
            <img
              src={slide}
              height="100"
              width="250"
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default InfinitySlider;
