import Key from "./Key";

import '../../keyboard.css'


function Keyboard( { onEnter, onDelete, onChar } ) {
    const onClick = (keyvalue) => {
        // if (keyvalue === 'ENTER') {
        //   onEnter()
        // } else if (keyvalue === 'DELETE') {
        //   onDelete()
        // } else {
        //   onChar(keyvalue)
        // }
        console.log(keyvalue)
      }

  return (
    <div id="keyboard">
      <div className="row">
        <Key value="q" onClick={onClick} />
        <Key value="w" onClick={onClick} />
        <Key value="e" onClick={onClick} />
        <Key value="r" onClick={onClick} />
        <Key value="t" onClick={onClick} />
        <Key value="y" onClick={onClick} />
        <Key value="u" onClick={onClick} />
        <Key value="i" onClick={onClick} />
        <Key value="o" onClick={onClick} />
        <Key value="p" onClick={onClick} />
      </div>
      <div className="row">
        <div className="half"></div>
        <Key value="a" onClick={onClick} />
        <Key value="s" onClick={onClick} />
        <Key value="d" onClick={onClick} />
        <Key value="f" onClick={onClick} />
        <Key value="g" onClick={onClick} />
        <Key value="h" onClick={onClick} />
        <Key value="j" onClick={onClick} />
        <Key value="k" onClick={onClick} />
        <Key value="l" onClick={onClick} />
        <div className="half"></div>
      </div>
      <div className="row">
        <Key value="enter" onClick={onClick} classn={"one-and-a-half"} />
        <Key value="z" onClick={onClick} />
        <Key value="x" onClick={onClick} />
        <Key value="c" onClick={onClick} />
        <Key value="v" onClick={onClick} />
        <Key value="b" onClick={onClick} />
        <Key value="n" onClick={onClick} />
        <Key value="m" onClick={onClick} />
        <Key value="back" onClick={onClick} classn={"one-and-a-half"} />
      </div>
    </div>
  );
}

export default Keyboard;
