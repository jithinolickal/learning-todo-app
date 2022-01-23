import { Col, Menu, Row } from "antd";
//import { TodoContext } from "App";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import History from "./History";
import Home from "./Home";
import Trash from "./Trash";

export const TodoContext = createContext([]);

const TodoApp = ({ authorized }) => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [deletedTodoList, setDeletedTodoList] = useState([]);
  const [current, setCurrent] = useState("A");
  const [historylog, setHistoryLog] = useState([]);

  let history = useHistory();
/* 
  if (!authorized) {
    console.log(authorized);
    return <Redirect to="/login" />;
  }
 */
  const handleTodo = (value) => {
    let id = Date.now();
    let newTodoList = [...todoList, { ...value, id: id, isComplete: false }];
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    //console.log(value + " " + id);
    setHistoryLog([
      ...historylog,
      `Added new item on ${new Date().toLocaleString()}`,
    ]);
  };
  const handleDelete = (id) => {
    let deletedTodo = todoList.filter((todo) => todo.id == id);
    setDeletedTodoList([...deletedTodoList, deletedTodo[0]]);
    let newTodoList = todoList.filter((todo) => todo.id != id);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setHistoryLog([
      ...historylog,
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
    setHistoryLog([
      ...historylog,
      `Marked item with id ${id} as completed on ${new Date().toLocaleString()}`,
    ]);
  };
  const handleRestore = (item) => {
    let newTodoList = deletedTodoList.filter((todo) => todo.id != item.id);
    setDeletedTodoList(newTodoList);
    setTodoList([...todoList, item]);
    localStorage.setItem("todoList", JSON.stringify([...todoList, item]));
    setHistoryLog([
      ...historylog,
      `Restored item with id ${item.id} on ${new Date().toLocaleString()}`,
    ]);
  };
  const handlePermanentDelete = (item) => {
    let newTodoList = deletedTodoList.filter((todo) => todo.id != item.id);
    setDeletedTodoList(newTodoList);
  };
  const handleClick = (e) => {
    setCurrent(e.key);
    history.push(navigationList.filter((menu) => menu.key == e.key)[0].path);
  };
  const handleNav = (path) => {
    history.push(path);
  };
  const backtoHome = () => {
    history.push("/");
    setCurrent("A");
  };

  const navigationList = [
    { key: "A", path: "/" },
    { key: "B", path: "/trash" },
    { key: "C", path: "/history" },
  ];

  return (
    <>
      <div className="app-title">TO DO</div>
      {/* <p style={{ color: "white" }}>{historylog}</p> */}
        <Row className="page-center">
          <Col span={12} offset={6}>
            <TodoContext.Provider
              value={[
                todoList,
                handleTodo,
                handleDelete,
                handleComplete,
                deletedTodoList,
                handleRestore,
                handlePermanentDelete,
                historylog,
                backtoHome,
              ]}
            >
              <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
              >
                <Menu.Item key="A">Home</Menu.Item>
                <Menu.Item key="B">Trash</Menu.Item>
                <Menu.Item key="C">History</Menu.Item>
              </Menu>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/trash" exact>
                  <Trash />
                </Route>
                <Route path="/history" exact>
                  <History />
                </Route>
              </Switch>
            </TodoContext.Provider>
          </Col>
        </Row>
    </>
  );
};

export default TodoApp;
