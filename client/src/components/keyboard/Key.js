import "../../keyboard.css";

function Key({ value, onClick, classn = "one", cs }) {

  if (cs && Object.keys(cs).includes(value)) {
    if (cs[value] === 2) {
      classn = "one_green";
    }
    else if (cs[value] === 1) {
      classn = "one_yellow";
    }
    else {
      classn = "one_grey";
    }
  }

  return <button className={classn} onClick={() => onClick(value)}>{value}</button>;
}

export default Key;
