import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import PostImage from "./postImage";
import Col from "react-bootstrap/Col";

function Post(props) {
  return (
    <Row className="justify-content-md-center">
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Row>
            <Col xs={9}>
              <Badge variant={props.feature}>Social</Badge>{" "}
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Col>
            <Col xs={3}>
              <PostImage />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Post;
