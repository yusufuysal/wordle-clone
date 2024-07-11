import { useEffect } from "react";
import Modal from "react-modal";
import "./App.css";
import Button from "./components/Button";
import GameBoard from "./components/GameBoard";
import GuessForm from "./components/GuessForm";
import useGameState from "./hooks/useGameState";
import useModal from "./hooks/useModal";

Modal.setAppElement("#root");

// resetBoard function => it resets the board but cant close the modal but it should
// close modal => can close it but could not reset the board

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
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    answer,
    guess,
    setGuess,
    allGuesses,
    setAllGuesses,
    hasWon,
    resetBoard,
  } = useGameState();

  console.log(answer);

  useEffect(() => {
    if (hasWon || allGuesses.length === 6) {
      openModal();
    }
  }, [allGuesses, hasWon]);

  const handleResetAndClose = (isSameWord) => {
    console.log("is same word: ", isSameWord);
    resetBoard(isSameWord);
    closeModal();
  };

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
        onRequestClose={() => handleResetAndClose()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {hasWon ? (
          <div className="modal-container">
            <h3>You Win !</h3>
            <Button onClick={() => handleResetAndClose()}>Play Again</Button>
          </div>
        ) : (
          <div className="modal-container">
            <h3>You lost:( </h3>
            <div className="lost-modal-btns">
              <Button onClick={() => handleResetAndClose(true)}>
                Try Again!
              </Button>
              <Button onClick={() => handleResetAndClose()}>
                Change the word
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}

export default App;
