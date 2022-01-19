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

export const TodoContext = createContext([]);

function App() {
  

  let history = useHistory();

  const [login, setLogin] = useState(false);
  

  return (
    <div className="App">
      <p style={{ color: "white" }}>{JSON.stringify(login)}</p>
     {/* <TodoApp/> */}
     {/* <Login/> */}
     <Button onClick={()=>setLogin(!login)}>{login ? "Logout" : "Login"}</Button>
     <Row style={{height: "100vh"}} align="middle">
       <Col span={12} offset={6}>
        <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/" exact component={() => <TodoApp authorized={login} />}/>
            
          </Switch>
      </Col>
      </Row>
    </div>
  );
}

export default App;
