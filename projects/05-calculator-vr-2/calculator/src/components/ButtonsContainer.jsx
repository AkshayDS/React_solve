import style from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonscontainer}>
      {buttonName.map((buttonName) => (
        <button
          className={style.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}{" "}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
