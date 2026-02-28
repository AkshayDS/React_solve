import Items from "./Items";

const FoodItems = ({ items1 }) => {
  return (
    <ul className="list-group">
      {items1.map((itemss) => (
        <Items
          key={itemss}
          foodthings={itemss}
          handleBuyButton={() => console.log(`${itemss} bought`)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
