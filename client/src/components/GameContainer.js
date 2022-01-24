import Keyboard from "./keyboard/Keyboard";
import Grid from "./grid/Grid";
import Alert from "./Alert";
import Header from "./Header";
import { useState } from "react";


import '../gamecontainer.css'


function GameContainer() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState(["drink", "apple"]);
  const [isGameWon, setIsGameWon] = useState(false);

  // alerts -- condensed to one useState
//   const [notEnoughLetters, setNotEnoughLetters] = useState(false);
//   const [wordNotFound, setWordNotFound] = useState(false);
  const [alert, setAlert] = useState("");

  const [gameLost, setGameLost] = useState(false);

  const onChar = (value) => {
    if (currentGuess.length < 5 && guesses.length < 6 && !isGameWon) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnter = () => {
    // check if word is correct length, if not render alert
    // TODO: make an alert
    if (!(currentGuess.length === 5)) {
    //   setNotEnoughLetters(true);
      setAlert("Not enough letters")
      return setTimeout(() => {
        // setNotEnoughLetters(false);
        setAlert("");
      }, 2000);
    }

    // check if current guess is in word list, if not render alert
    // TODO: make alert, configure word in list logic
    // if (!isWordInWordList(currentGuess)) {
    // //   setWordNotFound(true);
    //   setAlert("Word not in our database")
    //   return setTimeout(() => {
    //     // setWordNotFound(false);
    //     setAlert("")
    //   }, 2000);
    // }

    // TODO: congiure winning word logic
    //   const winningWord = isWinningWord(currentGuess)

    // add current guess to list of guesses
    if (currentGuess.length === 5 && guesses.length < 6 && !isGameWon) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess("");

      // TODO: config stats
    //   if (winningWord) {
    //     setStats(addStatsForCompletedGame(stats, guesses.length))
    //     return setIsGameWon(true);
    //   }

      // check if out of guesses, if so render loss
      // TODO: make alert, config stats
      if (guesses.length === 5) {
        //   setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        setGameLost(true);
        setAlert("Game over!"); // need to adjust if we are letting users play more than once a day
        return setTimeout(() => {
          setGameLost(false);
          setAlert("");
        }, 2000);
      }
    }
  };

  return (
    <div id="game">
      <Header />
      {alert? <Alert status={alert} /> : null}
      <Grid guess={currentGuess} guesses={guesses} />
      <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} />
    </div>
  );
}

export default GameContainer;
