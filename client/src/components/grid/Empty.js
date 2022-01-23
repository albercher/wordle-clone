// import Cell from "./Cell";

import '../../grid.css'

function Empty( { char } ) {

  return (
    <div className="row">
      <div className="cell" id="a0">{char}</div>
      <div className="cell" id="a1">{char}</div>
      <div className="cell" id="a2">{char}</div>
      <div className="cell" id="a3">{char}</div>
      <div className="cell" id="a4">{char}</div>
    </div>
  );
}

export default Empty