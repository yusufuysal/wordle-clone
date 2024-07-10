import styles from "./GameBoard.module.css";
import Square from "./Square";

// eslint-disable-next-line react/prop-types
const GameBoard = ({ allGuesses, answer }) => {
  const rows = [
    ...allGuesses,
    // eslint-disable-next-line react/prop-types
    ...Array.from({ length: 6 - allGuesses.length }, () => ""),
  ];

  const cols = Array.from({ length: 5 }, () => "");

  // eslint-disable-next-line react/prop-types
  const answerLetters = answer.split("");

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {cols.map((col, colIndex) => {
            const letter = row.split("")[colIndex];
            return (
              <Square
                key={colIndex}
                matchLevel={
                  answerLetters.includes(letter)
                    ? answerLetters[colIndex] === letter
                      ? "perfect"
                      : "loose"
                    : // eslint-disable-next-line react/prop-types
                      rowIndex < allGuesses.length && "none"
                }
              >
                {letter}
              </Square>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
