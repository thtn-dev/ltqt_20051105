import { useState } from "react";
import styles from "./Letter.module.css";
import Lottie from "lottie-react";
import data from "../../data/lottie/heart_beat_animation.json";
import { useDisclosure } from "@chakra-ui/react";
import Modal002 from "../Modal002/Modal002";

function HeartBeat() {
  return <Lottie animationData={data} loop autoplay />;
}

function Letter() {
  const [open, setOpen] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleClick = () => {
    setOpen(!open);
    setTimeout(() => {
      onOpen();
    }, 6000);
  };

  return (
    <div id="wrapper" className={styles.wrapper}>
      <div
        onClick={handleClick}
        className={`${styles.envelope} ${open ? styles.open : ""}`}
      >
        <Modal002 isOpen={isOpen} onClose={onClose} />
        <div
          style={{
            position: "absolute",
            zIndex: "4",
            left: "50%",
            top: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            width: "64px",
            visibility: open ? "hidden" : "visible",
          }}
        >
          <HeartBeat />
        </div>
        <div className={`${styles.flap} ${styles.front}`}></div>
        <div className={`${styles.flap} ${styles.top}`}></div>
        <div className={`${styles.letter}`}></div>
      </div>
    </div>
  );
}

export default Letter;
