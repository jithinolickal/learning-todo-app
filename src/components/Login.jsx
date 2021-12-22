import { Button, Card, Col, Form, Input, Row } from "antd";
import React, { Fragment } from "react";

const Login = () => {
  const [form] = Form.useForm();

  const handleAdd = (values) => {
    //handleTodo(values);
    form.resetFields();
  };

  return (
    <Fragment>
      <div >
        <Row align="middle" justify="center">
          <Col span={16} className="add-todo-container">
            <Form
              name="form"
              form={form}
              layout="vertical"
              className="add-todo-form"
              onFinish={handleAdd}
            >
              <Row align="top" gutter={[8, 16]}>
                <Col span={24}>
                  <Form.Item label="Username" name="username">
                    <Input className="text-box"></Input>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Password" name="password">
                    <Input className="text-box"></Input>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Button htmlType="submit" className="add-btn">
                      Login
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Login;
