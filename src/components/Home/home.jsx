import React, { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Post from "../Posts/postBox";
import "./home.css";
import axios from "axios";
import { UserContext } from "../../UserContext";

function Home() {

    const [posts, setPosts] = useState([]);
    const { user, setUser } = useContext(UserContext);

  let menu;

  if (user !== null) {
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
        <h1> {user !== null ? "Welcome " + user.username : "You must log in!"}</h1>
      </Row>
      {menu}
    </Container>
  );
}

export default Home;