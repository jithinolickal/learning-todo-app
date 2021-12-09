import {
  ArrowLeftOutlined,
  DeleteFilled,
  RollbackOutlined,
} from "@ant-design/icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, Space } from "antd";
import { TodoContext } from "App";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";

const TodoHistory = () => {
  const [
    todoList,
    handleTodo,
    handleDelete,
    handleComplete,
    deletedTodoList,
    handleRestore,
    handlePermanentDelete,
    log,
    backtoHome
  ] = useContext(TodoContext);
  const history = useHistory();
  const [revLog, setRevLog] = useState([]);
  useEffect(()=>{
    setRevLog(log.reverse());
  },[log])

  return (
    <>
      {/* <div style={{ color: "white" }}>{JSON.stringify(log)}</div> */}
      <Space direction="vertical" style={{width: "100%", marginTop: "10px"}}>
      {revLog?.map((item, index) => (
        <div className="todo-item" key={index}>
          <Row align="middle">
            <Col>
              <span style={{color: "white"}}>{item}</span>
            </Col>
          </Row>
        </div>
      ))}
      <Button className="icon-red" onClick={backtoHome}>
        <ArrowLeftOutlined /> Back to Home
      </Button>
      </Space>
    </>
  );
};

export default TodoHistory;
