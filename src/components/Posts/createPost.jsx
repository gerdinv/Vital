import React, { useState, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Redirect } from "react-router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import Badge from "react-bootstrap/Badge";
import { UserContext } from "../../UserContext";


function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("primary")
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);

  if (redirect) {
    return <Redirect to="/signin" />;
  }

  let genreBox;
  if(genre === 'primary') {
      genreBox = 'Social'
  } else if (genre === "success") {
      genreBox = 'Business'
  } else if (genre === "warning") {
      genreBox = 'Disturbing'
  } else {
      genreBox = "Important"
  }

  const submit = async (e) => {
      e.preventDefault()

      const postDetails = {
          title,
          genre,
          description
      }

      await axios.post("http://localhost:4000/app/createPost", postDetails).then((res) => {
          if(res.data.created){
              console.log("POST SAVED!")
          } else {
              console.log("ERROR SAVING POST")
          }
          console.log(res)
      }).catch((err) => {
        console.log("Error saving post to DB: " + err)
      });
  }

  let menu;
  
    if (user !== null) {
      menu = (
        <div>
          <Row className="justify-content-md-center">
            <h1>Create a Post</h1>
          </Row>

          <Row className="justify-content-md-center py-4">
            <Col xs={4}>
              <Form onSubmit={submit}>
                <TextField
                  id="standard-basic"
                  label="Post Title"
                  style={{ minWidth: "100%" }}
                  onChange={(e) => setTitle(e.target.value)}
                  className="my-3"
                />
                <Row className="text-center">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Genre"
                    className="mx-3"
                    onSelect={(e) => setGenre(e)}
                  >
                    <Dropdown.Item eventKey="primary">
                      <Badge variant="primary">Social</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="success">
                      <Badge variant="success">Business</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="warning">
                      <Badge variant="warning">Disturbing</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="danger">
                      <Badge variant="danger">Important</Badge>
                    </Dropdown.Item>
                  </DropdownButton>

                  <Badge
                    variant={genre}
                    style={{
                      width: "45%",
                      height: 32,
                      textAlign: "center",
                      fontSize: "1.2rem",
                    }}
                    className="m-auto"
                  >
                    {genreBox}
                  </Badge>
                </Row>

                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  onChange={(e) => setDescription(e.target.value)}
                  className="bx my-2"
                  style={{ height: "200px" }}
                />
                <Button
                  variant="outline-primary"
                  className="btn-block my-4"
                  type="submit"
                  value="Submit"
                >
                  POST
                </Button>
              </Form>
            </Col>
          </Row>
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

export default CreatePost;
