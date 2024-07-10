import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./App.css";
import Button from "./components/Button";
import GameBoard from "./components/GameBoard";
import GuessForm from "./components/GuessForm";
import { words } from "./utils/wordsData";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [answer, setAnswer] = useState("");
  const [guess, setGuess] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  function generateRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  useEffect(() => {
    console.log("here!!");
    const randomWord = generateRandomWord();
    setAnswer(randomWord);
  }, []);

  console.log(answer);

  function closeModal() {
    setIsModalOpen(false);
    handleResetBoard();
  }

  function handleResetBoard() {
    setIsModalOpen(false);
    setGuess("");
    setAllGuesses([]);
    const randomWord = generateRandomWord();
    setAnswer(randomWord);
  }

  useEffect(() => {
    if (allGuesses.includes(answer)) {
      setHasWon(true);
      setIsModalOpen(true);
    } else if (allGuesses.length === 6) {
      setHasWon(false);
      setIsModalOpen(true);
    }
  }, [allGuesses, answer]);

  return (
    <main className="container">
      <GameBoard allGuesses={allGuesses} answer={answer} />
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        allGuesses={allGuesses}
        setAllGuesses={setAllGuesses}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {hasWon ? (
          <div className="modal-container">
            <h3>You Win !</h3>
            <Button onClick={handleResetBoard}>Play Again</Button>
          </div>
        ) : (
          <div className="modal-container">
            <h3>You lost:( </h3>
            <div className="lost-modal-btns">
              <Button onClick={handleResetBoard}>Try Again!</Button>
              <Button onClick={handleResetBoard}>Change the word</Button>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}

export default App;
