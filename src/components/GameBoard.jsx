import styles from "./GameBoard.module.css";
import Square from "./Square";

// eslint-disable-next-line react/prop-types
const GameBoard = ({ allGuesses, answer }) => {
  const rows = [
    ...allGuesses,
    // eslint-disable-next-line react/prop-types
    ...Array.from({ length: 6 - allGuesses.length }, () => "R"),
  ];

  const cols = Array.from({ length: 5 }, () => "C");

  // eslint-disable-next-line react/prop-types
  const answerLetters = answer.split("");

  return (
    <div>
      {rows.map((row, index) => (
        <div key={index} className={styles.row}>
          {cols.map((col, index) => {
            const letter = row.split("")[index];
            return (
              <Square
                key={index}
                matchLevel={
                  answerLetters.includes(letter)
                    ? answerLetters[index] === letter
                      ? "perfect"
                      : "loose"
                    : "none"
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
