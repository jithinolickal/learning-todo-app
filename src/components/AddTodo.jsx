import React, { Fragment, useContext, useState } from "react";
import { Col, Form, Input, Row } from "antd";
import Button from "antd/es/button";
import TextArea from "rc-textarea";
import { TodoContext } from "./TodoApp";

const AddTodo = (props) => {
  const [form] = Form.useForm();
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

  /**
   *
   * Method to receive new todoitem values from the form and passes them on to the parent TodoApp Component.
   * Param received from Add todo form
   */
  const handleAdd = (values) => {
    handleTodo(values);
    form.resetFields();
  };

  return (
    <Fragment>
      <Row className="add-todo-container">
        <Col span={24}>
          <Form
            name="form"
            form={form}
            layout="vertical"
            className="add-todo-form"
            onFinish={handleAdd}
          >
            <Row align="bottom" gutter={[8, 16]}>
              <Col
                xs={{ span: 24, order: 2 }}
                sm={{ span: 24, order: 2 }}
                md={{ span: 24, order: 2 }}
                lg={{ span: 6, order: 1 }}
              >
                <Form.Item label="Enter Task Name" name="taskName">
                  <Input className="text-box"></Input>
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 24, order: 3 }}
                sm={{ span: 24, order: 3 }}
                md={{ span: 24, order: 3 }}
                lg={{ span: 0 }}
                xl={{ span: 0 }}
                xxl={{ span: 0 }}
              >
                <Form.Item label="Enter Task description" name="taskDesc">
                  <TextArea className="text-box" rows={4}></TextArea>
                </Form.Item>
              </Col>
              <Col
                lg={{ span: 12, order: 2, offset: 1 }}
                xs={{ span: 0 }}
                sm={{ span: 0 }}
                md={{ span: 0 }}
              >
                <Form.Item label="Enter Task description" name="taskDesc">
                  <Input className="text-box"></Input>
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 24, order: 1 }}
                sm={{ span: 24, order: 1 }}
                md={{ span: 24, order: 1 }}
                lg={{ span: 3, order: 3, offset: 1 }}
              >
                <Form.Item>
                  <Button htmlType="submit" className="add-btn">
                    ADD
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddTodo;
