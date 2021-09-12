import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Form } from "react-bootstrap";

function BlogPostForm({ blogPost, stateFunctions }) {
  const INITIAL_FORM_STATE = {
    title: "",
    description: "",
    body: "",
    isEditing: false,
  };

  const { editBlogPost, updateBlogPosts } = stateFunctions;
  const history = useHistory();
  const blogPostID = blogPost ? Object.keys(blogPost)[0] : undefined;
  const blogPostData = blogPostID ? blogPost[blogPostID] : INITIAL_FORM_STATE;

  const [formData, setFormData] = useState(blogPostData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(blogPostID);
    console.log(formData);
    updateBlogPosts(blogPostID, formData);
    history.push("/");
  };

  const handleCancel = (evt) => {
    evt.preventDefault();
    if (blogPostID) editBlogPost(blogPostID);
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
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description: </Form.Label>
        <Form.Control
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Body: </Form.Label>
        <Form.Control
          type="text"
          name="body"
          id="body"
          value={formData.body}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" className="btn-primary btn-small m-2">
        Save
      </Button>
      <Button className="btn-secondary btn-small m-2" onClick={handleCancel}>
        Cancel
      </Button>
    </Form>
  );
}
export default BlogPostForm;
