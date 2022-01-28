import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
  useLocation,
  NavLink,
} from "react-router-dom";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Row, Col, Menu, Button } from "antd";
import Trash from "components/Trash";
import Home from "components/Home";
import TodoHistory from "components/History";
import TodoApp from "components/TodoApp";
import Login from "components/Login";
import PrivateRoute from "components/PrivateRoute";
import Signup from "components/Signup";

function App() {
  const [authorized, setAuthorized] = useState(false);

  /**
   * 
   * Passing on authorized prop received from Login Page to Home Page.
   */
  const handleAuth = (authorized) => {
    setAuthorized(authorized);
  };

  return (
    <div className="App">
      <Row style={{ height: "100vh" }}>
        <Col
          xs={{ span: 24}}
          sm={{ span: 24 }}
          md={{ span: 24}}
          
        >
          <Switch>
            <Route path="/login" exact>
              <Login handleAuth={handleAuth} />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <PrivateRoute
              path="/"
              component={TodoApp}
              authorized={authorized}
            />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App;
