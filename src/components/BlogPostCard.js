import React from "react";
import { Card, Col } from "react-bootstrap";
import { HandThumbsDownFill, HandThumbsUpFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { voteToAPI } from "../actions/postActions";
import "./BlogPostCard.css";

function BlogPostCard({ description, id, title, votes }) {
  const dispatch = useDispatch();
  const handleVote = (id, direction) => {
    dispatch(voteToAPI(id, direction));
  };
  return (
    <Col xs={6}>
      <Card className="BlogPostCard">
        <Card.Title className="pt-2" as={Link} to={`/${id}`}>
          {title}
        </Card.Title>
        <Card.Subtitle className="pb-2">{description}</Card.Subtitle>
        <Card.Footer className="m-0">
          {votes} votes
          <HandThumbsUpFill
            onClick={() => handleVote(id, "up")}
            className="mx-2 text-primary vote"
          ></HandThumbsUpFill>
          <HandThumbsDownFill
            onClick={() => handleVote(id, "down")}
            className="text-danger vote"
          ></HandThumbsDownFill>
        </Card.Footer>
      </Card>
    </Col>
  );
}
export default BlogPostCard;
