import { useState } from "react";
import styles from "./App.module.css";
import GameBoard from "./components/GameBoard";
import GuessForm from "./components/GuessForm";

function App() {
  const answer = "yusuf";

  const [guess, setGuess] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);

  if (allGuesses.length === 6) {
    window.alert("You lost:( Try again!");
  }

  // eslint-disable-next-line react/prop-types
  if (allGuesses.includes(answer)) {
    window.alert("You Win !!!");
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
