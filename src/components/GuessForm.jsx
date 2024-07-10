// eslint-disable-next-line react/prop-types
const GuessForm = ({ guess, setGuess, allGuesses, setAllGuesses }) => {
  function handleSubmit(event) {
    event.preventDefault();

    // eslint-disable-next-line react/prop-types

    const newGuessesArray = [...allGuesses, guess];
    setAllGuesses(newGuessesArray);

    setGuess("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="label" htmlFor="guess">
        Enter guess:
      </label>
      <input
        className="input"
        type="text"
        minLength="5"
        maxLength="5"
        name="guess"
        id="guess"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
};

export default GuessForm;
