import Key from "./Key";
import { useState } from "react";
import "../../keyboard.css";

function Keyboard({ onEnter, onDelete, onChar , cs}) {
  const onClick = (value) => {
    if (value === "enter") {
      onEnter()
    } else if (value === "back") {
      onDelete()
    } else {
      onChar(value)
      // console.log(value)
    }
  };

  // const [keyStats, setKeyStats] = useState([
  //   { value: "q", stat: "" },
  //   { value: "w", stat: "" },
  //   { value: "e", stat: "" },
  //   { value: "r", stat: "" },
  //   { value: "t", stat: "" },
  //   { value: "y", stat: "" },
  //   { value: "u", stat: "" },
  //   { value: "i", stat: "" },
  //   { value: "o", stat: "" },
  //   { value: "p", stat: "" },
  // ]);

  return (
    <div id="keyboard">
      {/* <div className="row">
        {keyStats.map((x) => (
          <Key key={x.value} value={x.value} onClick={onClick} />
        ))}
      </div> */}

      <div className="row">
        <Key value="q" onClick={onClick} cs={cs} />
        <Key value="w" onClick={onClick} cs={cs} />
        <Key value="e" onClick={onClick} cs={cs} />
        <Key value="r" onClick={onClick} cs={cs} />
        <Key value="t" onClick={onClick} cs={cs} />
        <Key value="y" onClick={onClick} cs={cs} />
        <Key value="u" onClick={onClick} cs={cs} />
        <Key value="i" onClick={onClick} cs={cs} />
        <Key value="o" onClick={onClick} cs={cs} />
        <Key value="p" onClick={onClick} cs={cs} />
      </div>
      <div className="row">
        <div className="half"></div>
        <Key value="a" onClick={onClick} cs={cs} />
        <Key value="s" onClick={onClick} cs={cs} />
        <Key value="d" onClick={onClick} cs={cs} />
        <Key value="f" onClick={onClick} cs={cs} />
        <Key value="g" onClick={onClick} cs={cs} />
        <Key value="h" onClick={onClick} cs={cs} />
        <Key value="j" onClick={onClick} cs={cs} />
        <Key value="k" onClick={onClick} cs={cs} />
        <Key value="l" onClick={onClick} cs={cs} />
        <div className="half"></div>
      </div>
      <div className="row">
        <Key value="enter" onClick={onClick} classn={"one-and-a-half"} />
        <Key value="z" onClick={onClick} cs={cs} />
        <Key value="x" onClick={onClick} cs={cs} />
        <Key value="c" onClick={onClick} cs={cs} />
        <Key value="v" onClick={onClick} cs={cs} />
        <Key value="b" onClick={onClick} cs={cs} />
        <Key value="n" onClick={onClick} cs={cs} />
        <Key value="m" onClick={onClick} cs={cs} />
        <Key value="back" onClick={onClick} classn={"one-and-a-half"} />
      </div>
    </div>
  );
}

export default Keyboard;
