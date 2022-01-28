import { DeleteFilled } from "@ant-design/icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "antd";
import { TodoContext } from "./TodoApp";
import React, { useContext, useEffect, useState } from "react";

const TodoList = (props) => {
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
      {todoList?.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <Row align="middle">
            <Col xs={20} sm={20} md={20} lg={18} xl={18} xxl={20}>
              <Row justify="start">
                <Col>
                  <h3
                    className={
                      todo.isComplete
                        ? "complete-todo-title item-title"
                        : "item-title"
                    }
                  >
                    {todo?.taskName}
                  </h3>
                </Col>
              </Row>
              <Row justify="start">
                <Col>
                  <span
                    className={
                      todo.isComplete
                        ? "complete-todo-desc item-desc"
                        : "item-desc"
                    }
                  >
                    {todo?.taskDesc}
                  </span>
                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={4} md={4} lg={6} xl={6} xxl={4}>
              <Row gutter={[8, 8]} justify="end">
                <Col>
                  <Button
                    className="icon-red"
                    onClick={() => handleComplete(todo.id)}
                    hidden={todo.isComplete}
                  >
                    <FontAwesomeIcon icon={faCheckDouble} />
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="icon-red"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <DeleteFilled />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default TodoList;
