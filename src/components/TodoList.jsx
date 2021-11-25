import { TodoContext } from "App";
import React, { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
 
  /* const [a, setA] = useContext(TodoContext);
  useEffect(() => {
    setA([...a, { taskName: "Task2", taskDesc: "Desc2", id: 3 }]);
  }, []); */

  return (
    <>
      <TodoContext.Consumer>
        {([todoList, handleDelete, handleComplete]) => (
          <>
            {todoList.map((todo, key) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
          </>
        )}
      </TodoContext.Consumer>
      {/* {a.map((todo, key) => {
              console.log(todo);
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleDelete={() => handleDelete(todo.id)}
                />
              );
            })
          } */}
    </>
  );
};

export default TodoList;
