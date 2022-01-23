import Cell from "./Cell";

import '../../grid.css'

function Guesses( { guess } ) {

  const gArr = guess.toUpperCase().split("");



  return (
    <div className="row">
      {gArr.map((char, i) => (
        <Cell key={i} i={i} char={char} />
      ))}
    </div>
  );
}

export default Guesses