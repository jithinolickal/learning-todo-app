import React from "react";
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <div className="app-title">TO DO</div>
        <Row align="middle" className="page-center">
            <Col span={12} offset={6}>
              <AddTodo/>
              <TodoList/>
            </Col>
        </Row>
    </div>
  );
}

export default App;
