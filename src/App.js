import React, { createContext, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col } from "antd";

export const TodoContext = createContext([]);

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const handleTodo = (value) => {
    let newTodoList = [
      ...todoList,
      { ...value, id: Date.now(), isComplete: false },
    ];
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    console.log(value);
  };
  const handleDelete = (id) => {
    let newTodoList = todoList.filter((todo) => todo.id != id);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };
  const handleComplete = (id) => {
    let selectedindex = todoList.findIndex((todo) => todo.id == id);
    let newTodoList = [...todoList];
    newTodoList[selectedindex] = {
      ...newTodoList[selectedindex],
      isComplete: !newTodoList[selectedindex].isComplete,
    };
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  return (
    <div className="App">
      <p style={{ color: "white" }}>{JSON.stringify(todoList)}</p>
      <div className="app-title">TO DO</div>
      <Row align="middle" className="page-center">
        <Col span={12} offset={6}>
          <TodoContext.Provider
            value={[todoList, handleDelete, handleComplete]}
          >
            <AddTodo handleTodo={handleTodo} />
            <TodoList />
          </TodoContext.Provider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
