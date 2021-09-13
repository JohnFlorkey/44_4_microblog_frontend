import React from "react";
import { useDispatch } from "react-redux";
import { Button, ListGroup } from "react-bootstrap";
import { actionDeleteComment } from "./actions";
import "./CommentList.css";

function CommentList({ blogPostID, comments }) {
  const dispatch = useDispatch();

  const handleDeleteComment = (blogPostID, commentID) => {
    dispatch(actionDeleteComment(blogPostID, commentID));
  };

  return (
    <ListGroup variant="flush" className="text-left">
      <hr />
      <h4 className=" text-start">Comments</h4>

      {comments.map((c) => (
        <ListGroup.Item key={c.id} className="CommentList-Item">
          <Button
            type="button"
            className="btn-sm btn-danger m-x-2"
            onClick={() => handleDeleteComment(blogPostID, c.id)}
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
