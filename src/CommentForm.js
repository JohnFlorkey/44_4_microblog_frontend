import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Form, Button } from "react-bootstrap";
import useFormData from "./useFormData";
import { addCommentToAPI } from "./actions";
import "./CommentForm.css";

function CommentForm({ blogPostID }) {
  const INTIIAL_FORM_STATE = { comment: "" };
  const dispatch = useDispatch();
  const { postid } = useParams();

  const [formData, updateFormData, clearFormData] =
    useFormData(INTIIAL_FORM_STATE);

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(addCommentToAPI(postid, formData.comment));
    clearFormData();
  }

  return (
    <Form onSubmit={handleSubmit} className="CommentForm">
      <Form.Control
        type="text"
        placeholder="New Comment"
        name="comment"
        value={formData.comment}
        onChange={updateFormData}
      />
      <Button type="submit" className="btn-primary m-2">
        Add
      </Button>
    </Form>
  );
}

export default CommentForm;
