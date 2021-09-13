import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { Button } from "react-bootstrap";
import BlogPostForm from "./BlogPostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { actionDeleteBlogPost } from "./actions";
import "./BlogPostDetail.css";

function BlogPostDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postid } = useParams();
  const blogPosts = useSelector((store) => store);
  const [isEditing, setIsEditing] = useState(false);

  const blogPost = blogPosts[postid];
  const { body, description, title, comments } = blogPost;

  const deleteBlogPost = () => dispatch(actionDeleteBlogPost(postid));

  const handleDelete = () => {
    deleteBlogPost(postid);
    history.push("/");
  };

  const handleEdit = () => {
    setIsEditing(isEditing ? false : true);
  };

  return isEditing ? (
    <BlogPostForm blogPostID={postid} blogPostData={blogPost} />
  ) : (
    <div id={postid} className="BlogPostDetail">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{body}</p>
      <Button className="m-2" onClick={handleEdit}>
        Edit
      </Button>
      <Button className="m-2 btn-danger" onClick={handleDelete}>
        Delete
      </Button>
      <CommentList blogPostID={postid} comments={comments} />
      <CommentForm blogPostID={postid} />
    </div>
  );
}
export default BlogPostDetail;
