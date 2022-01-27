import Cell from "./Cell";
import { guessStats } from "../../functions/guessStats";

import '../../grid.css'

function Guesses( { guess, solution } ) {

  const gArr = guess.split("");

  // console.log("@ Guesses.js - solution: " + solution);


  const gS = guessStats(guess, solution);

  // console.log("guessStats: ")
  // console.log(guessStats(guess))

  return (
    <div className="grid_row">
      {gArr.map((char, i) => (
        <Cell key={i} i={i} char={char} status={gS[i]}/>
      ))}
    </div>
  );
}

export default Guesses