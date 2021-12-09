import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
  useLocation,
  NavLink,
} from "react-router-dom";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col, Menu } from "antd";
import Trash from "components/Trash";
import Home from "components/Home";
import TodoHistory from "components/History";

export const TodoContext = createContext([]);

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
  const [deletedTodoList, setDeletedTodoList] = useState([]);
  const [current, setCurrent] = useState("home");
  const [log, setLog] = useState([]);
  const [message, setMessage] = useState("");

  let history = useHistory();
  let location = useLocation();

  const handleTodo = (value) => {
    let id = Date.now();
    let newTodoList = [...todoList, { ...value, id: id, isComplete: false }];
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    console.log(value + " " + id);
    setLog([...log, `Added new item on ${new Date().toLocaleString()}`]);
  };
  const handleDelete = (id) => {
    let deletedTodo = todoList.filter((todo) => todo.id == id);
    setDeletedTodoList([...deletedTodoList, deletedTodo[0]]);
    let newTodoList = todoList.filter((todo) => todo.id != id);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setLog([
      ...log,
      `Deleted item with id ${id} on ${new Date().toLocaleString()}`,
    ]);
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
    setLog([
      ...log,
      `Marked item with id ${id} as completed on ${new Date().toLocaleString()}`,
    ]);
  };
  const handleRestore = (item) => {
    let newTodoList = deletedTodoList.filter((todo) => todo.id != item.id);
    setDeletedTodoList(newTodoList);
    setTodoList([...todoList, item]);
    localStorage.setItem("todoList", JSON.stringify([...todoList, item]));
    setLog([
      ...log,
      `Restored item with id ${item.id} on ${new Date().toLocaleString()}`,
    ]);
  };
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
  const backtoHome = ()=>{
    history.push("/");  
    setCurrent("home"); 
  }

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
            <Menu.Item key="home">
              <NavLink to="/" exact activeClassName="selectedPage">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item key="trash">
              <NavLink to="/trash" exact activeClassName="selectedPage">
                Trash
              </NavLink>
            </Menu.Item>
            <Menu.Item key="history">
              <NavLink to="/history" exact activeClassName="selectedPage">
                History
              </NavLink>
            </Menu.Item>
          </Menu>
          <TodoContext.Provider
            value={[
              todoList,
              handleTodo,
              handleDelete,
              handleComplete,
              deletedTodoList,
              handleRestore,
              handlePermanentDelete,
              log,
              backtoHome
            ]}
          >
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/trash" component={Trash} exact />
              <Route path="/history" component={TodoHistory} exact />
            </Switch>
          </TodoContext.Provider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
