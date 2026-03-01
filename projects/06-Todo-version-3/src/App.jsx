import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Wlm from "./components/Wlm"

import "./App.css";
import { useState } from "react";

function App() {


  const [todoItems, setTodoItems] = useState([]);
  const handlenewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem =(todoItemName) =>{
    const newTodoItems = todoItems.filter((item)=>item.name !==todoItemName);
    setTodoItems(newTodoItems);
    
    
    
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handlenewItem} />
      
      {todoItems.length===0 && <Wlm></Wlm>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
