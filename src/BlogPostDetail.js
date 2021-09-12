import React from "react";
import { useParams, useHistory } from "react-router";
import { Button } from "react-bootstrap";
import BlogPostForm from "./BlogPostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./BlogPostDetail.css";

function BlogPostDetail({ blogPosts, stateFunctions }) {
  const history = useHistory();
  const { deleteBlogPost, editBlogPost, addComment, deleteComment } =
    stateFunctions;
  const { postid } = useParams();
  const { body, description, title, isEditing, comments } = blogPosts[postid];

  const handleDelete = (postid) => {
    deleteBlogPost(postid);
    history.push("/");
  };

  const handleEdit = (postid) => {
    editBlogPost(postid);
  };

  return isEditing ? (
    <BlogPostForm
      blogPost={{ [postid]: blogPosts[postid] }}
      stateFunctions={stateFunctions}
    />
  ) : (
    <div id={postid} className="BlogPostDetail">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{body}</p>
      <Button className="m-2" onClick={() => handleEdit(postid)}>
        Edit
      </Button>
      <Button className="m-2 btn-danger" onClick={() => handleDelete(postid)}>
        Delete
      </Button>
      <CommentList
        blogPostID={postid}
        comments={comments}
        deleteComment={deleteComment}
      />
      <CommentForm blogPostID={postid} addComment={addComment} />
    </div>
  );
}
export default BlogPostDetail;
