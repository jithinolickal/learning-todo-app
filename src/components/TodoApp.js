import { Col, Menu, Row } from "antd";
import { TodoContext } from "App";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import TodoHistory from "./History";
import Home from "./Home";
import Trash from "./Trash";

const TodoApp = ({authorized}) => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [deletedTodoList, setDeletedTodoList] = useState([]);
  const [current, setCurrent] = useState("home");
  const [log, setLog] = useState([]);

  let history = useHistory();

  useEffect(()=>{
    console.log(authorized);
  },[authorized])

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
    console.log("clicked");
  };
  const handleNav = (path) => {
    history.push(path);
  };
  const backtoHome = () => {
    history.push("/");
    setCurrent("home");
  };

  if (!authorized) {
    console.log(authorized);
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="app-title">TO DO</div>
      {/* <Row className="page-center">
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
              backtoHome,
            ]}
          >
            <Switch>
              <Route path="/a" component={Home} exact />
              <Route path="/a/trash" component={Trash} exact />
              <Route path="/a/history" component={TodoHistory} exact />
            </Switch>
          </TodoContext.Provider>
        </Col>
      </Row> */}
    </>
  );
};

export default TodoApp;
