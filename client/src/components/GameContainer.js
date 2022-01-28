import Keyboard from "./keyboard/Keyboard";
import Grid from "./grid/Grid";
import Alert from "./Alert";
import Header from "./header/Header";
import AboutButton from "./AboutButton";
import About from "./About";
import { useState } from "react";
import { longList } from "../constants/LongList";
import { shortList } from "../constants/ShortList";
import { charStats } from "../functions/charStats";

import { getSolution } from "../functions/getSolution";


import "../gamecontainer.css";
import PlayAgain from "./PlayAgain";
import HowToPlay from "./header/HowToPlay"

function GameContainer({ user, setUser }) {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameLoss, setGameLoss] = useState(false);
  const [solution, setSolution] = useState(getSolution());
  const [showHowTo, setShowHowTo] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // alerts -- condensed to one useState
  const [alert, setAlert] = useState("");

  // charStats for keyboard coloring
  const cs = charStats(guesses, solution);

  // console.log("@ GameContainer.js - solution: " + solution);

  // keyboard functions
  const onChar = (value) => {
    if (currentGuess.length < 5 && guesses.length < 6 && !gameWon) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnter = () => {
    // check if word is correct length, if not render alert
    if (!(currentGuess.length === 5) && !gameWon && !gameLoss) {
      //   setNotEnoughLetters(true);
      setAlert("Not enough letters");
      return setTimeout(() => {
        // setNotEnoughLetters(false);
        setAlert("");
      }, 2000);
    }

    // add current guess to list of guesses
    if (currentGuess.length === 5 && guesses.length < 6 && !gameWon && !gameLoss) {
      //if word is in word lists
      if (longList.includes(currentGuess) || shortList.includes(currentGuess)) {
        // if word is solution
        if (currentGuess === solution) {
          setGameWon(true);
          // post request to add game as won to stats if user logged in
          if (user) {
            const winData = { user_id: user.id, win: true };
            fetch("/scores", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(winData),
            })
              .then((response) => response.json())
              .then((data) => {
                setUser(data.user);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
        }

        // add it to our list of guesses and reset the current guess
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");
        checkIfLoss();
      }
      // if not in word list
      else {
        // reset current guess and send alert
        setCurrentGuess("");
        console.log("ERROR! " + currentGuess + " is not a valid word.");
        setAlert("Not a valid word");
        return setTimeout(() => {
          setAlert("");
        }, 2000);
      }
    }
  };

  function checkIfLoss() {
    // check if out of guesses, if so render loss
    if (!(guesses.length < 5)) {
      setGameLoss(true);

      if (user) {
        const lossData = { user_id: user.id, win: false };
        fetch("/scores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lossData),
        })
          .then((response) => response.json())
          .then((data) => {
            setUser(data.user);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  }

  // replay game
  function handleReplay() {
    setGameWon(false);
    setGameLoss(false);

    // TODO: needs to get new word
    setSolution(getSolution());

    setGuesses([]);
  }

  function handleShowHowTo(){
    setShowHowTo(!showHowTo)
  }

  function handleShowAbout() {
    setShowAbout(!showAbout)
  }

  return (
    <div id="game">
      {showHowTo ? <HowToPlay handleShowHowTo={handleShowHowTo} /> : null}
      <Header user={user} setUser={setUser} handleShowHowTo={handleShowHowTo} />
      {alert ? <Alert status={alert} /> : null}
      {showAbout ? <About /> : null}
      {gameWon || gameLoss ? <PlayAgain handleReplay={handleReplay} gameWon={gameWon}/> : null}
      <Grid currentGuess={currentGuess} guesses={guesses} solution={solution} />
      <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} cs={cs} />
      <AboutButton handleShowAbout={handleShowAbout} showAbout={showAbout}/>
    </div>
  );
}

export default GameContainer;
