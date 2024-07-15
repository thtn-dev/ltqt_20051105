import styles from "./HeartBackground.module.css";

function Heart() {
  return (
    <svg
      className={styles.heart}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="101.7px"
      height="87.6px"
      viewBox="0 0 101.7 87.6"
      enableBackground="new 0 0 101.7 87.6"
      xmlSpace="preserve"
    >
      <path
        d="M51,12.8c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.1-0.1,0.2C31-10.7,0,0.2,0,28.9c0,27.6,40.7,56.9,50.9,58.8
                c10.1-1.8,50.9-31.1,50.9-58.8C101.7,0.2,70.7-10.7,51,12.8z"
      />
    </svg>
  );
}

function HeartBackground() {
  const hearts = Array.from({ length: 5 }).map((_, index) => (
    <Heart key={index} />
  ));
  return <div className={styles.wrapper}>{hearts}</div>;
}

export default HeartBackground;
