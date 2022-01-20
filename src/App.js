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

function App() {
  

  let history = useHistory();

  const [authorized, setAuthorized] = useState(false);
  
  const handleAuth = (authorized) => {
    setAuthorized(authorized);
  }

  return (
    <div className="App">
      <p style={{ color: "white" }}>{JSON.stringify(authorized)}</p>
     {/* <TodoApp/> */}
     {/* <Login/> */}
     {/* <Button onClick={()=>setLogin(!login)}>{login ? "Logout" : "Login"}</Button> */}
     <Row style={{height: "100vh"}} align="middle">
       <Col span={12} offset={6}>
        <Switch>
            <Route path="/login" component={() => <Login handleAuth={handleAuth} />} exact />
            <Route path="/" component={() => <TodoApp authorized={authorized} />}/>
            
          </Switch>
      </Col>
      </Row>
    </div>
  );
}

export default App;
