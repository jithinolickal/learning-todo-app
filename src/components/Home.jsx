import { TodoContext } from "./TodoApp";
import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Home = () => {
  const [
    todoList,
    handleTodo,
    handleDelete,
    handleComplete,
    deletedTodoList,
    handleRestore,
    handlePermanentDelete,
    historylog,
    backtoHome,
  ] = useContext(TodoContext);

  return (
    <>
      <>
        <AddTodo />
        <TodoList />
      </>
    </>
  );
};

export default Home;
