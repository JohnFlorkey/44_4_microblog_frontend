import React from "react";
import { Form, Button } from "react-bootstrap";
import useFormData from "./useFormData";
import "./CommentForm.css";

function CommentForm({ blogPostID, addComment }) {
  const INTIIAL_FORM_STATE = { comment: "" };
  const [formData, updateFormData, clearFormData] =
    useFormData(INTIIAL_FORM_STATE);

  function handleSubmit(evt) {
    evt.preventDefault();
    addComment(blogPostID, formData);
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
