import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  let foodItems = ["Fruits", "Vegis", "Meat", "Egg", "sjsb"];

  return (
    <>
      <h1 className="head">Healthy Foods</h1>
      <ErrorMessage items1={foodItems}></ErrorMessage>
      <FoodItems items1={foodItems}></FoodItems>
    </>
  );
}

export default App;
