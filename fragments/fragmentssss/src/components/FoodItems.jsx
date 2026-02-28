import { useState } from "react";
import Items from "./Items";

const FoodItems = ({ items1 }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (itemss,event)=>{
    let newItems = [...activeItems, itemss]
    setActiveItems(newItems);

  }
  return (
    <ul className="list-group">
      {items1.map((itemss) => (
        <Items
          key={itemss}
          foodthings={itemss}
          bought={activeItems.includes(itemss)}
          handleBuyButton={(event) => onBuyButton(itemss,event)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
