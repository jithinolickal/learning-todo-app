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

const TodoApp = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [deletedTodoList, setDeletedTodoList] = useState([]);
  const [current, setCurrent] = useState("A");
  const [historylog, setHistoryLog] = useState([]);

  let history = useHistory();

  /**
   * 
   * Method to add new todoitem to the existing todolist stored in localstorage and adding the event to log.
   * Param received from AddTodo Component
   */
  const handleTodo = (value) => {
    let id = Date.now();
    let newTodoList = [...todoList, { ...value, id: id, isComplete: false }];
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setHistoryLog([
      ...historylog,
      `Added new item on ${new Date().toLocaleString()}`,
    ]);
  };

  /**
   * 
   * Method to delete a particular todoitem from the existing todolist and adding the event to log.
   * Param received from TodoList Component
   */
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

  /**
   * 
   * Method to mark a particular todoitem as complete from the existing todolist and adding the event to log.
   * Param received from TodoList Component
   */
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

  /**
   * 
   * Method to restore a deleted todoitem from the trash page and adding the event to log.
   * Param received from Trash Component
   */
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

  /**
   * 
   * Method to do permanent delete of a todoitem from the trash page.
   * Param received from Trash Component
   */
  const handlePermanentDelete = (item) => {
    let newTodoList = deletedTodoList.filter((todo) => todo.id != item.id);
    setDeletedTodoList(newTodoList);
  };

  /**
   * 
   * Method to navigate to the selected page and display it as current page in the UI
   */
  const handleClick = (e) => {
    setCurrent(e.key);
    history.push(navigationList.filter((menu) => menu.key == e.key)[0].path);
  };

  /**
   * 
   * Method to navigate to Home page from the History page.
   */
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
      <Row className="page-center">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset: 7 }}>
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
