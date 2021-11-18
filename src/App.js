import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col } from "antd";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleTodo = (value) => {
    let tempTodo = { ...value };
    tempTodo.id = todoList.length + 1;
    let newTodo = tempTodo;
    setTodoList([...todoList, newTodo]);
  };
  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id != id));
  };

  return (
    <div className="App">
      <div className="app-title">TO DO</div>
      <Row align="middle" className="page-center">
        <Col span={12} offset={6}>
          <AddTodo handleTodo={handleTodo} />
          <TodoList todoList={todoList} handleDelete={handleDelete} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
