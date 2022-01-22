import "../../keyboard.css";

function Key({ value, onClick, classn = "one" }) {
  return <button className={classn} onClick={() => onClick(value)}>{value}</button>;
}

export default Key;
