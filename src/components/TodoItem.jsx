import React from "react";
import { Col, Row, Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <Row align="middle">
        <Col xs={20} sm={20} md={20} lg={18} xl={18} xxl={20}>
          <Row justify="start">
            <Col>
              <h3 className="item-title">{props.todo?.taskName}</h3>
            </Col>
          </Row>
          <Row justify="start">
            <Col>
              <span className="item-desc">{props.todo?.taskDesc}</span>
            </Col>
          </Row>
        </Col>
        <Col xs={4} sm={4} md={4} lg={6} xl={6} xxl={4}>
          <Row gutter={[8, 8]} justify="end">
            <Col>
              <Button className="icon-red">
                <FontAwesomeIcon icon={faCheckDouble} />
              </Button>
            </Col>
            <Col>
              <Button className="icon-red">
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
