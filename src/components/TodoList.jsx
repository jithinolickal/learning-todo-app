import { TodoContext } from "../App";
import React, { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todoList } = useContext(TodoContext);

  return (
    <>
      {todoList.map((todo, key) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
