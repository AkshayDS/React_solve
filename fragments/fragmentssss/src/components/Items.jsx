import styles from "./Items.module.css";

const Items = ({ foodthings,bought, handleBuyButton }) => {
 

  return (
    <li className={`${styles["bck-items"]} list-group-item ${bought && "active"}`}>
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
