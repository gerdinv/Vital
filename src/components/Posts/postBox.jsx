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
              <Card.Title>New scammers in town!</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
