const Square = ({ matchLevel, children }) => {
  let bgColor = "#fff";

  if (matchLevel === "perfect") {
    bgColor = "#6aaa64";
  } else if (matchLevel === "good") {
    bgColor = "#c9b458";
  } else if (matchLevel === "bad") {
    bgColor = "grey";
  }

  return (
    <div
      className="box"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
};

export default Square;
