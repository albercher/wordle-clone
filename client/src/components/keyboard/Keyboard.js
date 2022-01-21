import Key from "./Key";

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
    <div>
      <div style={{
          textAlign: "center",
          marginBottom: '6px'
      }}>
        <Key value="Q" onClick={onClick} />
        <Key value="W" onClick={onClick} />
        <Key value="E" onClick={onClick} />
        <Key value="R" onClick={onClick} />
        <Key value="T" onClick={onClick} />
        <Key value="Y" onClick={onClick} />
        <Key value="U" onClick={onClick} />
        <Key value="I" onClick={onClick} />
        <Key value="O" onClick={onClick} />
        <Key value="P" onClick={onClick} />
      </div>
      <div style={{
          textAlign: "center",
          marginBottom: '6px'
      }}>
        <Key value="A" onClick={onClick} />
        <Key value="S" onClick={onClick} />
        <Key value="D" onClick={onClick} />
        <Key value="F" onClick={onClick} />
        <Key value="G" onClick={onClick} />
        <Key value="H" onClick={onClick} />
        <Key value="J" onClick={onClick} />
        <Key value="K" onClick={onClick} />
        <Key value="L" onClick={onClick} />
      </div>
      <div style={{
          textAlign: "center",
      }}>
        <Key value="ENTER" onClick={onClick} />
        <Key value="Z" onClick={onClick} />
        <Key value="X" onClick={onClick} />
        <Key value="C" onClick={onClick} />
        <Key value="V" onClick={onClick} />
        <Key value="B" onClick={onClick} />
        <Key value="N" onClick={onClick} />
        <Key value="M" onClick={onClick} />
        <Key value="BACK" onClick={onClick} />
      </div>
    </div>
  );
}

export default Keyboard;
