import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Button, Form } from "react-bootstrap";
import useFormData from "./useFormData";
import { insertPostToAPI, updatePostToAPI } from "./actions";

function BlogPostForm({ blogPostID, blogPostData }) {
  const INITIAL_FORM_STATE = {
    title: "",
    description: "",
    body: "",
    isEditing: false,
    comments: [],
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const { postid } = useParams();

  const initialFormData = blogPostData ? blogPostData : INITIAL_FORM_STATE;
  const [formData, updateFormData] = useFormData(initialFormData);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (postid) {
      dispatch(
        updatePostToAPI(
          postid,
          formData.title,
          formData.description,
          formData.body
        )
      );
    } else {
      dispatch(
        insertPostToAPI(formData.title, formData.description, formData.body)
      );
    }
    history.push("/");
  };

  const handleCancel = (evt) => {
    evt.preventDefault();
    history.push("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title: </Form.Label>
        <Form.Control
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={updateFormData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description: </Form.Label>
        <Form.Control
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={updateFormData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Body: </Form.Label>
        <Form.Control
          type="text"
          name="body"
          id="body"
          value={formData.body}
          onChange={updateFormData}
        />
      </Form.Group>
      <Button
        type="submit"
        className="btn-primary btn-small m-2"
        onClick={handleSubmit}
      >
        Save
      </Button>
      <Button className="btn-secondary btn-small m-2" onClick={handleCancel}>
        Cancel
      </Button>
    </Form>
  );
}
export default BlogPostForm;
