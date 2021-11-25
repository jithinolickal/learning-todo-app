import React, { createContext, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col } from "antd";

export const TodoContext = createContext();

function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  const handleTodo = (value) => {
    setTodoList([
      ...todoList,
      { ...value, id: Date.now(), isComplete: false },
    ]);
  };
  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id != id));
  };
  const handleComplete = (todo1) => {
    let selectedindex = todoList.findIndex((todo) => todo.id == todo1.id);
    let newTodoList = [...todoList];
    newTodoList[selectedindex] = {
      ...newTodoList[selectedindex],
      isComplete: todo1.isComplete,
    };
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      {/* <p style={{ color: "white" }}>{JSON.stringify(todoList)}</p> */}
      <div className="app-title">TO DO</div>
      <Row align="middle" className="page-center">
        <Col span={12} offset={6}>
          <TodoContext.Provider value={[todoList, setTodoList]}>
            <AddTodo handleTodo={handleTodo} />
            <TodoList
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          </TodoContext.Provider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
