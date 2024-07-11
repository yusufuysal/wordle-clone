import Button from "./Button";

const ModalContent = ({ hasWon, handleResetAndClose }) => {
  return hasWon ? (
    <div className="modal-container">
      <h3>You Win !</h3>
      <Button onClick={() => handleResetAndClose()}>Play Again</Button>
    </div>
  ) : (
    <div className="modal-container">
      <h3>You lost:( </h3>
      <div className="lost-modal-btns">
        <Button onClick={() => handleResetAndClose(true)}>Try Again!</Button>
        <Button onClick={() => handleResetAndClose()}>Change the word</Button>
      </div>
    </div>
  );
};

export default ModalContent;
