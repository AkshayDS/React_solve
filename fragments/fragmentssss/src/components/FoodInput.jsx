import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
  
  return (
    <input
      type="text"
      placeholder="Enter the items"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    ></input>
  );
};

export default FoodInput;
