import React, { useContext } from "react";
import { Col, Row, Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react/cjs/react.development";
import { TodoContext } from "../App";

const TodoItem = (props) => {
  const { todoList, setTodoList, handleDelete, handleComplete } = useContext(TodoContext);

  const localHandleDelete = () => {
    handleDelete(props.todo.id);
  };
  const localHandleComplete = () => {
    handleComplete(props.todo.id);
  };

  return (
    <div className="todo-item">
      <Row align="middle">
        <Col xs={20} sm={20} md={20} lg={18} xl={18} xxl={20}>
          <Row justify="start">
            <Col>
              <h3
                className={
                  props.todo.isComplete
                    ? "complete-todo-title item-title"
                    : "item-title"
                }
              >
                {props.todo?.taskName}
              </h3>
            </Col>
          </Row>
          <Row justify="start">
            <Col>
              <span
                className={
                  props.todo.isComplete
                    ? "complete-todo-desc item-desc"
                    : "item-desc"
                }
              >
                {props.todo?.taskDesc}
              </span>
            </Col>
          </Row>
        </Col>
        <Col xs={4} sm={4} md={4} lg={6} xl={6} xxl={4}>
          <Row gutter={[8, 8]} justify="end">
            <Col>
              <Button
                className="icon-red"
                onClick={localHandleComplete}
                hidden={props.todo.isComplete}
              >
                <FontAwesomeIcon icon={faCheckDouble} />
              </Button>
            </Col>
            <Col>
              <Button className="icon-red" onClick={localHandleDelete}>
                <DeleteFilled />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TodoItem;
