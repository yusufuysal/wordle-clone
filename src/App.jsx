import { useState } from "react";
import styles from "./App.module.css";
import GameBoard from "./components/GameBoard";
import GuessForm from "./components/GuessForm";

function App() {
  const answer = "berna";

  const [guess, setGuess] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);

  if (allGuesses.length === 6) {
    window.alert("Game is over!");
  }

  return (
    <main className={styles.container}>
      <GameBoard allGuesses={allGuesses} answer={answer} />
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        allGuesses={allGuesses}
        setAllGuesses={setAllGuesses}
      />
    </main>
  );
}

export default App;
