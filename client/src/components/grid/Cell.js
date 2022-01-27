
import '../../grid.css'

function Cell( { char, i, status } ) {

  const c = char;

  // console.log("char, status: " + char + ", " + status)

  let cName = "cell_" + status;

  return (
    <div className={cName} id="a0">{c}</div>
  );
}

export default Cell