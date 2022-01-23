// import Empties from "./Empties";
import Guesses from "./Guesses";
import Current from "./Current";
import Empty from "./Empty";



import '../../grid.css'

const guesses = ["drink", "apple", "fruit", "robot", "tarot"];
const currentGuess = "";

let emptiesArr =  guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];

function Grid() {

  return (
    <div className="grid">
      {guesses.map((guess, i) => (
        <Guesses key={i} guess={guess}/>
      ))
      }
      <Current currentGuess={currentGuess}/>
      {emptiesArr.map((e, i) => (
        <Empty key={i} char=""/>
      ))}
    </div>
  );
}

export default Grid