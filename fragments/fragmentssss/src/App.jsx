import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value ='';
      let newItems =[...foodItems,newFoodItem];
      setFoodItems(newItems)

    }
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="head">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items1={foodItems}></ErrorMessage>
        
        <FoodItems items1={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Note: Order Only The Healthy food</p>
      </Container>
    </>
  );
}

export default App;
