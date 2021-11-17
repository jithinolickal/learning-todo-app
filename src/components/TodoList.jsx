import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      {props.todoList?.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
