import { useEffect, useState } from "react";
import { generateRandomWord } from "../utils/wordsData";

const useGameState = () => {
  const [answer, setAnswer] = useState(generateRandomWord());
  const [guess, setGuess] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    if (allGuesses.includes(answer)) {
      setHasWon(true);
    }
  }, [allGuesses, answer]);

  function resetBoard(isSameWord) {
    setGuess("");
    setAllGuesses([]);
    setHasWon(false);

    !isSameWord && setAnswer(generateRandomWord());
  }

  return {
    answer,
    setAnswer,
    guess,
    setGuess,
    allGuesses,
    setAllGuesses,
    hasWon,
    resetBoard,
  };
};

export default useGameState;
