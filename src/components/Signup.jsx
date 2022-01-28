import { Button, Card, Col, Form, Input, notification, Row } from "antd";
import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [usersList, setUsersList] = useState(
    JSON.parse(localStorage.getItem("usersList")) || []
  );

   /**
   *
   * Method to validate if the User Credentials entered in the form are not empty.
   * If valid, credentials are added to the localstorage. Else, it remains in the same page.
   * Notifications are thrown in both the cases.
   */
  const handleSignup = (values) => {
    if (values.username && values.password) {
      let newUsersList = [...usersList, { username: values.username, password: values.password }];
      setUsersList(newUsersList);
      localStorage.setItem("usersList", JSON.stringify(newUsersList));
      openNotificationwithIcon("success");
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } else {
      openNotificationwithIcon("error");
    }
  };
  const openNotificationwithIcon = (type) => {
    type=="success" && notification["success"]({
      message: "Signup successful",
      description: "You will be redirected to Login Page"
    });
    type=="error" && notification["error"]({
      message: "Signup Failed",
    });
  };

  return (
    <Fragment>
      <div>
        <Row align="middle" justify="center">
          <Col
            xs={{ span: 20 }}
            sm={{ span: 16 }}
            md={{ span: 16 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            className="add-todo-container"
          >
            <Form
              name="form"
              form={form}
              layout="vertical"
              className="add-todo-form"
              onFinish={handleSignup}
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
                      Signup
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

export default Signup;
