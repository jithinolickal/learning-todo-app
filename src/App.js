import React, { createContext, useState } from "react";
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
  const [current, setCurrent ] = useState("");
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
  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
    history.push("/"+e.key);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <p style={{ color: "white" }}>{JSON.stringify(todoList)}</p>
        <div className="app-title">TO DO</div>
        <Row align="middle" className="page-center">
          <Col span={12} offset={6}>
           {/*  <TodoContext.Provider
              value={[todoList, handleDelete, handleComplete]}
            >
              <AddTodo handleTodo={handleTodo} />
              <TodoList /> */}
<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
         Home
        </Menu.Item>
        <Menu.Item key="trash">
          Trash
        </Menu.Item>
        </Menu>
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/trash" component={Trash} exact/>
              </Switch>
            {/* </TodoContext.Provider> */}
          </Col>
        </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
