import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { Button } from "react-bootstrap";
import BlogPostForm from "./BlogPostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { deletePostFromAPI } from "./actions";
import { getPostFromAPI } from "./actions";
import "./BlogPostDetail.css";

function BlogPostDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postid } = useParams();
  const blogPosts = useSelector((store) => store.posts);
  const blogPost = blogPosts[postid];
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!blogPosts[postid]) {
      dispatch(getPostFromAPI(postid));
    }
  }, [dispatch, blogPosts, postid]);

  const handleDelete = () => {
    dispatch(deletePostFromAPI(postid));
    history.push("/");
  };

  const handleEdit = () => {
    setIsEditing(isEditing ? false : true);
  };

  return isEditing ? (
    <BlogPostForm blogPostID={postid} blogPostData={blogPost} />
  ) : blogPost ? (
    <div id={postid} className="BlogPostDetail">
      <h2>{blogPost.title}</h2>
      <p>{blogPost.description}</p>
      <p>{blogPost.body}</p>
      <Button className="m-2" onClick={handleEdit}>
        Edit
      </Button>
      <Button className="m-2 btn-danger" onClick={handleDelete}>
        Delete
      </Button>
      <CommentList blogPostID={postid} comments={blogPost.comments} />
      <CommentForm blogPostID={postid} />
    </div>
  ) : null;
}
export default BlogPostDetail;
