import styles from "./GameBoard.module.css";
import Square from "./Square";

const GameBoard = () => {
  const rows = [1, 2, 3, 4, 5, 6];
  const cols = [1, 2, 3, 4, 5];

  return (
    <div>
      {rows.map((row) => (
        <div key={row} className={styles.row}>
          {cols.map((col) => (
            <Square key={col} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
