// import Cell from "./Cell";

import '../../grid.css'

function Current( { currentGuess } ) {

  // console.log("currentGuess: " + currentGuess)

  let g = currentGuess.toUpperCase()

  // console.log("g: " + g);

  return (
    <div className="row">
      <div className="cell" id="a0">{g[0]}</div>
      <div className="cell" id="a1">{g[1]}</div>
      <div className="cell" id="a2">{g[2]}</div>
      <div className="cell" id="a3">{g[3]}</div>
      <div className="cell" id="a4">{g[4]}</div>
    </div>
  );
}

export default Current