import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { Button } from "react-bootstrap";
import { HandThumbsDownFill, HandThumbsUpFill } from "react-bootstrap-icons";
import BlogPostForm from "./BlogPostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import {
  deletePostFromAPI,
  getPostFromAPI,
  voteToAPI,
} from "../actions/postActions";
import "./BlogPostDetail.css";

function BlogPostDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postid } = useParams();
  const id = parseInt(postid);
  const blogPosts = useSelector((store) => store.posts);
  const blogPost = blogPosts[id];
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!blogPosts[id]) {
      // if this post does not exist in state, go get it from the API
      dispatch(getPostFromAPI(id));
    }
  }, [dispatch, blogPosts, id]);

  const handleDelete = () => {
    dispatch(deletePostFromAPI(id));
    history.push("/");
  };

  const handleEdit = () => {
    setIsEditing(isEditing ? false : true);
  };

  const handleVote = (id, direction) => dispatch(voteToAPI(id, direction));

  if (isEditing) {
    // if we're editing the post render the form
    return <BlogPostForm blogPostID={id} blogPostData={blogPost} />;
  } else {
    // we're not editing so render the post details if we have them
    if (blogPost) {
      return (
        <div id={id} className="BlogPostDetail">
          <h2>{blogPost.title}</h2>
          <p>{blogPost.description}</p>
          <p>{blogPost.body}</p>
          <Button className="m-2" onClick={handleEdit}>
            Edit
          </Button>
          <Button className="m-2 btn-danger" onClick={handleDelete}>
            Delete
          </Button>
          <div>
            {blogPost.votes} votes
            <HandThumbsUpFill
              onClick={() => handleVote(id, "up")}
              className="mx-2 text-primary vote"
            ></HandThumbsUpFill>
            <HandThumbsDownFill
              onClick={() => handleVote(id, "down")}
              className="text-danger vote"
            ></HandThumbsDownFill>
          </div>
          <CommentList blogPostID={id} comments={blogPost.comments} />
          <CommentForm blogPostID={id} />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default BlogPostDetail;
