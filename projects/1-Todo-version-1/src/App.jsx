
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";


function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="item-container">
      <TodoItem></TodoItem>
      <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
