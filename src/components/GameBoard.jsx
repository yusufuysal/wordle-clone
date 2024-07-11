import { useEffect, useState } from "react";
import Square from "./Square";

const GameBoard = ({ allGuesses, answer }) => {
  const rows = [
    ...allGuesses,
    ...Array.from({ length: 6 - allGuesses.length }, () => ""),
  ];

  const cols = Array.from({ length: 5 }, () => "");

  const [matchLevels, setMatchLevels] = useState([]);

  useEffect(() => {
    const calculateMatchLevels = () => {
      const newMatchLevels = allGuesses.map((guess) => {
        let localAnswerLetters = [...answer.split("")];
        return guess.split("").map((letter, colIndex) => {
          let level = "bad";
          if (localAnswerLetters[colIndex] === letter) {
            level = "perfect";
            localAnswerLetters[colIndex] = "-";
          } else if (localAnswerLetters.includes(letter)) {
            level = "good";
            const matchIndex = localAnswerLetters.indexOf(letter);
            localAnswerLetters[matchIndex] = "-";
          }
          return level;
        });
      });
      setMatchLevels(newMatchLevels);
    };

    calculateMatchLevels();
  }, [allGuesses, answer]);

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {cols.map((col, colIndex) => {
            const letter = row.split("")[colIndex];
            const matchLevel = matchLevels[rowIndex]?.[colIndex] || "";
            return (
              <Square key={colIndex} matchLevel={matchLevel}>
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
