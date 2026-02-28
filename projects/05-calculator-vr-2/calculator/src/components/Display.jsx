import style from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      placeholder="0"
      className={style.display}
      value={displayValue}
      readOnly
    ></input>
  );
};

export default Display;
