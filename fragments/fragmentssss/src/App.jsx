import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";


function App() {
  let foodItems = ["Fruits", "Vegis", "Meat", "Egg", "Chicken","Milk","Dry Fruits"];

  return (
    <>
    <Container>
      <h1 className="head">Healthy Foods</h1>
      <ErrorMessage items1={foodItems}></ErrorMessage>
      <FoodItems items1={foodItems}></FoodItems>
    </Container>
    <Container>
      <h5>Note: This are Healthy foods , Recomnded by "Akshay"</h5>
    </Container>
    </>
  );
}

export default App;
