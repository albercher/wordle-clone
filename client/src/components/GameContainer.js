import Keyboard from "./keyboard/Keyboard";
import Grid from "./grid/Grid";
import Alert from "./Alert";
import Header from "./header/Header";
import { useState } from "react";
import { longList } from "../constants/LongList";
import { shortList } from "../constants/ShortList";
import { charStats } from "../functions/charStats";

import '../gamecontainer.css'


function GameContainer() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);

  // let charStats = {};
  // let uniqueChars = "";
  // if (guesses.length > 1) {
  //   const uniqueSet = new Set(guesses.join('').split(""));
  //   uniqueChars = [...uniqueSet].join('');
  //   console.log("uni: " + uniqueChars);
  // }
  // else if (guesses.length === 1) {
  //   const uniqueSet = new Set(guesses[0].split(""));
  //   uniqueChars = [...uniqueSet].join('');
  //   console.log("uni: " + uniqueChars);
  // }

  // if (uniqueChars) {
  //   for (let i = 0; i < uniqueChars.length; i++) {
  //     charStats[uniqueChars[i]] = true;
  //   }
  // }

  // console.log("charStats: ");
  // console.log(charStats);

  const cs = charStats(guesses);
  console.log("cs: ")
  console.log(cs)


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
      if (longList.includes(currentGuess) || shortList.includes(currentGuess)) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");
      }
      else {
        setCurrentGuess("");
        console.log("ERROR! " + currentGuess + " is not a valid word.")
        setAlert("Not a valid word")
        return setTimeout(() => {
          setAlert("");
        }, 2000);
      }

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
      <Grid currentGuess={currentGuess} guesses={guesses} />
      <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} cs={cs}/>
    </div>
  );
}

export default GameContainer;
