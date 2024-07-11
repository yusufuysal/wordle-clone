import { useEffect } from "react";
import Modal from "react-modal";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GuessForm from "./components/GuessForm";
import ModalContent from "./components/ModalContent";
import useGameState from "./hooks/useGameState";
import useModal from "./hooks/useModal";

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
  }, [allGuesses, hasWon, openModal]);

  const handleResetAndClose = (isSameWord) => {
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
        <ModalContent
          hasWon={hasWon}
          handleResetAndClose={handleResetAndClose}
        />
      </Modal>
    </main>
  );
}

export default App;
