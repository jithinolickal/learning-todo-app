import { TodoContext } from "App";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Home = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
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
  return (
    <>
      <TodoContext.Provider value={[todoList, handleDelete, handleComplete]}>
        <AddTodo handleTodo={handleTodo} />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
};

export default Home;
