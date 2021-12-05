import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col, Menu } from "antd";
import Trash from "components/Trash";
import Home from "components/Home";

export const TodoContext = createContext([]);

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [deletedTodoList, setDeletedTodoList] = useState([]);
  const [current, setCurrent] = useState("");
  let history = useHistory();

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
    let deletedTodo = todoList.filter((todo) => todo.id == id);
    console.log(deletedTodoList);
    
    setDeletedTodoList([...deletedTodoList, deletedTodo[0]]);
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
  const handleRestore = (item) => {
    let newTodoList = deletedTodoList.filter((todo) => todo.id != item.id);
    setDeletedTodoList(newTodoList);
    setTodoList([...todoList, item]);
    localStorage.setItem("todoList", JSON.stringify([...todoList, item]));
  }
  const handlePermanentDelete = (item) => {
    let newTodoList = deletedTodoList.filter((todo) => todo.id != item.id);
    setDeletedTodoList(newTodoList);
  };
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const handleNav = (path) => {
    history.push(path);
  };
  useEffect(() => {
    setCurrent("home");
  }, []);

  return (
    <div className="App">
      {/* <p style={{ color: "white" }}>{JSON.stringify(todoList)}</p> */}
      <div className="app-title">TO DO</div>
      <Row className="page-center">
        <Col span={12} offset={6}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="home" onClick={() => handleNav("/")}>
              Home
            </Menu.Item>
            <Menu.Item key="trash" onClick={() => handleNav("/trash")}>
              Trash
            </Menu.Item>
          </Menu>
          <TodoContext.Provider
            value={[todoList, handleTodo, handleDelete, handleComplete, deletedTodoList, handleRestore, handlePermanentDelete]}
          >
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/trash" component={Trash} exact />
            </Switch>
          </TodoContext.Provider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
