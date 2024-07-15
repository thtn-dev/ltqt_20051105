import { useState } from "react";
import styles from "./Letter.module.css";
function Letter() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div id="wrapper" className={styles.wrapper}>
      <div
        onClick={handleClick}
        className={`${styles.envelope} ${open ? styles.open : ""}`}
      >
        <div className={`${styles.flap} ${styles.front}`}></div>
        <div className={`${styles.flap} ${styles.top}`}></div>
        <div className={`${styles.letter}`}></div>
      </div>
    </div>
  );
}

export default Letter;
