import React, { useEffect, useState } from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        setTodoList([
            ...todoList,
            props.newTodo
        ]);
    }, [props.newTodo])

    return (
        <>
            {/* <div style={{ color: "white" }}>{JSON.stringify(todoList)}</div> */}
            {
                todoList.map((todo, index) => <TodoItem key={index} todo={todo}/>)
            }
        </>
    );
}

export default TodoList;