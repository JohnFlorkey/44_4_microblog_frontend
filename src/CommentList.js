import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./CommentList.css";

function CommentList({ blogPostID, comments, deleteComment }) {
  return (
    <ListGroup variant="flush" className="text-left">
      <hr />
      <h4 className=" text-start">Comments</h4>

      {comments.map((c) => (
        <ListGroup.Item key={c.id} className="CommentList-Item">
          <Button
            type="button"
            className="btn-sm btn-danger m-x-2"
            onClick={() => deleteComment(blogPostID, c.id)}
          >
            X
          </Button>
          <span className="mx-2">{c.comment}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CommentList;
