import styles from "./Items.module.css"


const Items = ({foodthings}) => {
  return (
    <li className= {`${styles["bck-items"]}` }><span className="fonts">{foodthings}</span>
    </li>
  );
};

export default Items;
