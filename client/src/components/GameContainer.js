import Keyboard from "./keyboard/Keyboard";
import Grid from "./grid/Grid";
import Alert from "./Alert";
import Header from "./header/Header";
import { useState } from "react";
import { longList } from "../constants/LongList";
import { shortList } from "../constants/ShortList";
import { charStats } from "../functions/charStats";

import { solution } from "../constants/Solution";

import "../gamecontainer.css";

function GameContainer({ user, setUser }) {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

  // alerts -- condensed to one useState
  const [alert, setAlert] = useState("");

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
  console.log("cs: ");
  console.log(cs);

  // keyboard functions
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
      setAlert("Not enough letters");
      return setTimeout(() => {
        // setNotEnoughLetters(false);
        setAlert("");
      }, 2000);
    }

    // add current guess to list of guesses
    if (currentGuess.length === 5 && guesses.length < 6 && !isGameWon) {
      //if word is in word lists
      if (longList.includes(currentGuess) || shortList.includes(currentGuess)) {
        // if word is solution
        if (currentGuess === solution.toLowerCase()) {
          setAlert("You won! Play again?");
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

      // check if out of guesses, if so render loss
      if (guesses.length === 5) {
        //   setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        setAlert("Game over!"); // need to adjust if we are letting users play more than once a day
        // return setTimeout(() => {
        //   setAlert("");
        // }, 2000);

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
  };

  return (
    <div id="game">
      <Header user={user} setUser={setUser} />
      {alert ? <Alert status={alert} /> : null}
      <Grid currentGuess={currentGuess} guesses={guesses} />
      <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} cs={cs} />
    </div>
  );
}

export default GameContainer;
