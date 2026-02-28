import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = [
    "Fruits",
    "Vegis",
    "Meat",
    "Egg",
    "Chicken",
    "Milk",
    "Dry Fruits",
  ];
  
  let [texToShow, setTextState] = useState("Items Enter by the users");
  console.log(`${texToShow}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="head">Healthy Foods</h1>
        <ErrorMessage items1={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{texToShow}</p>
        <FoodItems items1={foodItems}></FoodItems>
      </Container>
      <Container>
        <h5>Note: This are Healthy foods , Recomnded by "Akshay"</h5>
      </Container>
    </>
  );
}

export default App;
