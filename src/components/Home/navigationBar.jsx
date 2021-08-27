import React, { useState, useContext, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Redirect } from 'react-router';
import axios from 'axios'
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";




function NavigationBar() {
    let history = useHistory();

  const [redirect, setRedirect] = useState(false);
  const {user, setUser} = useContext(UserContext);

  const onLogout = () => {
    axios
      .get("http://localhost:4000/app/logout")
      .then((res) => {
        setRedirect(true);
        console.log(res.data);
        setUser(null)
        // history.push("/post"); // or redirect
      })
      .catch((err) => {
        console.log("Error logging out: " + err);
      });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  function goToHome() {
    history.push("/home");
  }

  function goToMessages() {
    history.push("/messages");
  }

  function goToPost() {
    history.push("/post");
  }

  function goToSettings() {
    history.push("/settings");
  }

  let menu;

  if (user === null) {
    menu = (
      <Nav className="ml-auto">
        <Nav.Link href="signup">Register</Nav.Link>
        <Nav.Link href="signin">Login</Nav.Link>
      </Nav>
    );
  } else {
    menu = (
      <Nav className="ml-auto">
        <Nav.Link href="#" onClick={goToHome}>
          Home
        </Nav.Link>
        <Nav.Link href="#" onClick={goToMessages}>
          Messages
        </Nav.Link>
        <Nav.Link href="#" onClick={goToPost}>
          Create Post
        </Nav.Link>
        <Nav.Link href="#" onClick={goToSettings}>
          Settings
        </Nav.Link>
        <Nav.Link href="#" onClick={onLogout}>
          Logout
        </Nav.Link>
      </Nav>
    );
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      {menu}
    </Navbar>
  );
}

export default NavigationBar;