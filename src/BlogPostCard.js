import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogPostCard.css";

function BlogPostCard({ description, id, title }) {
  return (
    <Col xs={6}>
      <Card className="BlogPostCard p-2">
        <Card.Title as={Link} to={`/${id}`}>
          {title}
        </Card.Title>
        <Card.Subtitle>{description}</Card.Subtitle>
      </Card>
    </Col>
  );
}
export default BlogPostCard;
