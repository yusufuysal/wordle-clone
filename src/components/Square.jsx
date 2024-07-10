import styles from "./Square.module.css";

// eslint-disable-next-line react/prop-types
const Square = ({ matchLevel, children }) => {
  let bgColor = "none";

  if (matchLevel === "perfect") {
    bgColor = "green";
  } else if (matchLevel === "loose") {
    bgColor = "yellow";
  }

  return (
    <div
      className={styles.box}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
};

export default Square;
