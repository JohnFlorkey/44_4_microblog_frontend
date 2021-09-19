import axios from "axios";
import {
  addTitle,
  deleteTitle,
  updateTitle,
  updateTitleVotes,
} from "./titleActions";
import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  UPDATE_POST,
  UPDATE_POST_VOTES,
} from "./actionTypes";

export function addComment(postID, comment) {
  return { type: ADD_COMMENT, payload: { postID, comment } };
}

export function addCommentToAPI(postID, comment) {
  return async function (dispatch) {
    const response = await axios.post(
      `http://localhost:5000/api/posts/${postID}/comments`,
      { post_id: postID, text: comment }
    );
    dispatch(addComment(postID, response.data));
  };
}

export function addPost(id, postData) {
  return { type: ADD_POST, payload: { id, postData } };
}

export function deleteComment(postID, commentID) {
  return { type: DELETE_COMMENT, payload: { postID, commentID } };
}

export function deleteCommentFromAPI(postID, commentID) {
  return async function (dispatch) {
    await axios.delete(
      `http://localhost:5000/api/posts/${postID}/comments/${commentID}`
    );
    dispatch(deleteComment(postID, commentID));
  };
}

export function deletePost(id) {
  return { type: DELETE_POST, payload: { id } };
}

export function deletePostFromAPI(id) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    dispatch(deletePost(id));
    dispatch(deleteTitle(id));
  };
}

export function getPostFromAPI(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
    dispatch(addPost(id, response.data));
  };
}

export function insertPostToAPI(title, description, body) {
  return async function (dispatch) {
    const response = await axios.post(`http://localhost:5000/api/posts`, {
      title,
      description,
      body,
    });
    const res = response.data;
    dispatch(addPost(res.id, { ...res, comments: [] }));
    dispatch(addTitle(res.id, res.title, res.description, res.body, res.votes));
  };
}

export function updatePost(id, title, description, body) {
  return { type: UPDATE_POST, payload: { id, title, description, body } };
}

export function updatePostToAPI(id, newTitle, newDescription, newBody) {
  return async function (dispatch) {
    const response = await axios.put(`http://localhost:5000/api/posts/${id}`, {
      title: newTitle,
      description: newDescription,
      body: newBody,
    });
    const { title, description, body, votes } = response.data;
    dispatch(updatePost(id, title, description, body));
    dispatch(updateTitle(id, title, description, votes));
  };
}

export function updatePostVotes(id, votes) {
  return { type: UPDATE_POST_VOTES, payload: { id, votes } };
}

export function voteToAPI(id, direction) {
  return async function (dispatch) {
    const response = await axios.post(
      `http://localhost:5000/api/posts/${id}/vote/${direction}`
    );
    dispatch(updatePostVotes(id, response.data.votes));
    dispatch(updateTitleVotes(id, response.data.votes));
  };
}
