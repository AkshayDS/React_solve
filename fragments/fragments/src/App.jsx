import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Fruits", "Vegis", "Meat", "Egg"];

  let check=
  foodItems.length===0 ? <h3>Order The food</h3> :null;

  
  

  return (
    <>
      <h1>Healthy Foods</h1>
      {check}
      <ul className="list-group">
        {foodItems.map((itemss) => (
          <li key={itemss} className="list-group-item">
            {itemss}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
