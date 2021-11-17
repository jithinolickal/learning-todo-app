import React, { useState } from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col } from 'antd';

function App() {

  const [todo, setTodo] = useState();

  const handleTodo = (value) => {
    setTodo(value);
  }

  return (
    <div className="App">
      <div style={{color: "white"}}>{JSON.stringify(todo)}</div>
      <div className="app-title">TO DO</div>
      <Row align="middle" className="page-center">
        <Col span={12} offset={6}>
          <AddTodo handleTodo={handleTodo}/>
          <TodoList newTodo={todo}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
