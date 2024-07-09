import styles from "./App.module.css";
import GameBoard from "./components/GameBoard";
import GuessForm from "./components/GuessForm";

function App() {
  return (
    <main className={styles.container}>
      <GameBoard />
      <GuessForm />
    </main>
  );
}

export default App;
