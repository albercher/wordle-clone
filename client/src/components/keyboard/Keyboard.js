import Key from "./Key";
import { useState, useEffect } from "react";
import "../../keyboard.css";

function Keyboard({ onEnter, onDelete, onChar , cs}) {
  const onClick = (value) => {
    if (value === "Enter") {
      onEnter()
    } else if (value === "Delete") {
      onDelete()
    } else {
      onChar(value)
    }
  };

  useEffect(() => {
    function listener(e) {
      if (e.key === "Enter") {
        onEnter();
      } else if (e.key === "Backspace") {
        onDelete();
      } else {
        const key = e.key.toLowerCase()
        if (key.length === 1 && key >= "a" && key <= "z") {
          onChar(key);
        }
      }
    }
    window.addEventListener("keyup", listener)
    return () => {
      window.removeEventListener("keyup", listener)
    }
  }, [onEnter, onDelete, onChar]);


  return (
    <div id="keyboard">
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
        <Key value="Enter" onClick={onClick} classn={"one-and-a-half"} />
        <Key value="z" onClick={onClick} cs={cs} />
        <Key value="x" onClick={onClick} cs={cs} />
        <Key value="c" onClick={onClick} cs={cs} />
        <Key value="v" onClick={onClick} cs={cs} />
        <Key value="b" onClick={onClick} cs={cs} />
        <Key value="n" onClick={onClick} cs={cs} />
        <Key value="m" onClick={onClick} cs={cs} />
        <Key value="Delete" onClick={onClick} classn={"one-and-a-half"} />
      </div>
    </div>
  );
}

export default Keyboard;
