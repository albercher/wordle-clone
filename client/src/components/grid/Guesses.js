import Cell from "./Cell";
import { guessStats } from "../../functions/guessStats";

import '../../grid.css'

function Guesses( { guess } ) {

  const gArr = guess.toUpperCase().split("");

  const gS = guessStats(guess);

  console.log("guessStats: ")
  console.log(guessStats(guess))


  return (
    <div className="row">
      {gArr.map((char, i) => (
        <Cell key={i} i={i} char={char} status={gS[i]}/>
      ))}
    </div>
  );
}

export default Guesses