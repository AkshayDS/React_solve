import styles from "./FoodInput.module.css";
const FoodInput = ({handleOnChange}) => {
  
  return (
    <input
      type="text"
      placeholder="Enter the items"
      className={styles.foodInput}
      onChange={handleOnChange}
    ></input>
  );
};

export default FoodInput;
