
import '../../grid.css'

const solution = "TAROT";

function Cell( { char, i } ) {

  const c = char.toUpperCase();
  console.log(i)
  console.log(solution[i])
  console.log(char)

  let status = -1;
  let cName = "";

  if (solution[i] === char) {
    status = 1;
    cName = "cell_1";
  }
  else if (solution.includes(char)) {
    status = 0;
    cName = "cell_0";
  }
  else {
    status = -1;
    cName = "cell_-1";
  }

  return (
    <div className={cName} id="a0">{c}</div>
  );
}

export default Cell