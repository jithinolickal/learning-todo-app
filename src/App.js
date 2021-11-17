import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col } from "antd";

function App() {
  const [todoList, setTodoList] = useState([
    {
      taskName: "aaa",
      taskDesc: "aaa",
    },
    {
      taskName: "bbb",
      taskDesc: "bbb",
    },
  ]);

  const handleTodo = (value) => {
    setTodoList([...todoList, value]);
  };

  return (
    <div className="App">
      <div className="app-title">TO DO</div>
      <Row align="middle" className="page-center">
        <Col span={12} offset={6}>
          <AddTodo handleTodo={handleTodo} />
          <TodoList todoList={todoList} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
