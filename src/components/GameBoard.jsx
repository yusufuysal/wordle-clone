import Square from "./Square";

const GameBoard = ({ allGuesses, answer }) => {
  const rows = [
    ...allGuesses,
    ...Array.from({ length: 6 - allGuesses.length }, () => ""),
  ];

  const cols = Array.from({ length: 5 }, () => "");
  const answerLetters = answer.split("");

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
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
                    : rowIndex < allGuesses.length && "none"
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
