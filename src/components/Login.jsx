import { Button, Card, Col, Form, Input, notification, Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ handleAuth }) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [usersList, setUsersList] = useState(
    JSON.parse(localStorage.getItem("usersList")) || []
  );
  console.log(usersList);

   /**
   *
   * Method to validate User Credentials entered in the form with the details stored in localstorage.
   * It navigates to Home Page if login is succesful. Else it remains in the Login page and throws an error notification.
   */
  const handleLogin = (values) => {
    let user = usersList?.filter((user) => user.username == values.username && user.password == values.password);
    if (user?.length > 0) {
      setTimeout(() => {
        localStorage.setItem("isLoggedIn", "true")
        handleAuth(true);
        history.push("/");
      }, 1000);
    } else {
      openNotification();
    }
  };
  const openNotification = () => {
    notification["error"]({
      message: "Login Failed",
    });
  };

  /**
   * To check whether the user is already logged in and redirect to home page if logged in.
   * Else will redirect to login page
   */
  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn") == "true"){
      handleAuth(true);
      history.push("/");
    }
  },[])

   /**
   *
   * Method to navigate to the signup page.
   */
  const handleSignup = (values) => {
    history.push("/signup");
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
              onFinish={handleLogin}
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
                    <Button
                      htmlType="submit"
                      className="add-btn"
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Button onClick={handleSignup} className="add-btn">
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

export default Login;
