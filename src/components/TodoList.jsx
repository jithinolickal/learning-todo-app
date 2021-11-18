import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const handleDelete = (id) => {
    props.handleDelete(id);
  };

  return (
    <>
      {props.todoList?.map((todo, key) => {
        console.log(todo.id);
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={() => handleDelete(todo.id)}
          />
        );
      })}
    </>
  );
};

export default TodoList;
