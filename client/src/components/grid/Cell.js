
import '../../grid.css'
import { solution } from "../../constants/Solution";

console.log("solution: " + solution)
// const solution = "REACT";

// let sol = solution;

function Cell( { char, i, status } ) {

  const c = char.toUpperCase();

  console.log("char, status: " + char + ", " + status)

  let cName = "cell_" + status;

  return (
    <div className={cName} id="a0">{c}</div>
  );
}

export default Cell