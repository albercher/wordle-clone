// import Empties from "./Empties";
import Guesses from "./Guesses";
import Current from "./Current";
import Empty from "./Empty";

import '../../grid.css'

function Grid( { guesses, currentGuess, solution } ) {

  let emptiesArr =  guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];

  console.log("@ Grid.js - solution: " + solution);

  return (
    <div className="grid">
      {guesses.map((guess, i) => (
        <Guesses key={i} guess={guess} solution={solution} />
      ))
      }
      {guesses.length < 6 ? <Current currentGuess={currentGuess} /> : null}
      {emptiesArr.map((e, i) => (
        <Empty key={i} char=""/>
      ))}
    </div>
  );
}

export default Grid