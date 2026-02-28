import styles from "./Items.module.css";

const Items = ({ foodthings, handleBuyButton }) => {
 

  return (
    <li className={`${styles["bck-items"]} list-group-item `}>
      <span className="fonts">{foodthings}</span>
      <button
        className={`${styles.buttons} btn btn-info `}
        onClick={handleBuyButton}
      >
        
        Buy
      </button>
    </li>
  );
};

export default Items;
