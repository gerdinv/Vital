import React from "react";
import Image from "react-bootstrap/Image";
import profilePic from "../Images/userPic.jpg";
import Col from "react-bootstrap/Col";

function PostImage(props) {
  return <Image src={profilePic} roundedCircle width="75rem" height="75rem" />;
}

export default PostImage;
