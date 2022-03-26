/* eslint-disable */

import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Data from "./Data";
import Detail from "./Detail";
import axios from "axios";

import { Link, Route, Routes } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  let [shoes, setShoes] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div>
            <div className="background">
              <h1>Let's Travel :)</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor placeat facere provident aliquid quae consequatur odio eveniet rerum tempore ducimus at cupiditate illo, perferendis,
                laborum iusto architecto neque ab tenetur!
              </p>
              <p>
                <button>Find</button>
              </p>
            </div>
            <div className="container">
              <div className="row">
                {shoes.map((cur, idx) => {
                  return <Card shoes={shoes[idx]} key={idx} idx={idx} />;
                })}
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    console.log(result.data);
                    setShoes([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    console.log("실패했어요");
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여주셈</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.idx + 1) + ".jpg"} alt="" width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}원
      </p>
    </div>
  );
}

export default App;
