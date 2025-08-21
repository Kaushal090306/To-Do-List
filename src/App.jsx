import React, { useState } from 'react';
import "./App.css";

import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = (newTask) => {
    if (newTask !== '') {
      setTodoItems([...todoItems, newTask]);
    }
  };

  const deleteTodo = (index) => {
    let updatedTodos = [...todoItems];
    updatedTodos.splice(index, 1);
    setTodoItems(updatedTodos);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addTodo} />
        <h1 className="app-heading">My TODO List</h1>
        <hr />
        {todoItems.map((task, index) => (
          <TodoList
            key={index}
            index={index}
            item={task}
            deleteItem={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;