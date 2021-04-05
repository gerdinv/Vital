import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Post from "../Posts/postBox";
import "./home.css";

function Home(props) {
  let menu;

  if (props.name !== "") {
    menu = (
      <div>
        <Post className="box" feature="primary" />
        <Post className="box" feature="success" />
        <Post className="box" feature="warning" />
        <Post feature="danger" />
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <h1> {props.name ? "Welcome " + props.name : "You must log in!"}</h1>
      </Row>
      {menu}
    </Container>
  );
}

export default Home;
