import styles from "./Items.module.css";

const Items = ({ foodthings }) => {
const buyclicked = (event)=>{
  console.log(event);
  console.log(`${foodthings} item being bought`)

}

  return (
    <li className={`${styles["bck-items"]} list-group-item `}>
      <span className="fonts">{foodthings}</span>
      <button
        className={`${styles.buttons} btn btn-info `}
        onClick={(event)=>buyclicked(event)}
      >
        
        Buy
      </button>
    </li>
  );
};

export default Items;
