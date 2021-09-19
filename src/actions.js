import axios from "axios";

import {
  ADD_COMMENT,
  ADD_POST,
  ADD_TITLE,
  DELETE_COMMENT,
  DELETE_POST,
  DELETE_TITLE,
  LOAD_TITLES,
  UPDATE_POST,
  UPDATE_TITLE,
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

export function addTitle(id, title, description, body) {
  return { type: ADD_TITLE, payload: { id, title, description, body } };
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

export function deleteTitle(id) {
  return { type: DELETE_TITLE, payload: id };
}

export function getPostFromAPI(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
    dispatch(addPost(id, response.data));
  };
}

export function getTitlesFromAPI() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:5000/api/posts");
    dispatch(loadTitles(response.data));
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
    dispatch(addTitle(res.id, res.title, res.description, res.body));
  };
}

export function loadTitles(titles) {
  return { type: LOAD_TITLES, payload: titles };
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
    const { title, description, body } = response.data;
    dispatch(updatePost(id, title, description, body));
    dispatch(updateTitle(id, title, description, body));
  };
}

export function updateTitle(id, title, description) {
  return { type: UPDATE_TITLE, payload: { id, title, description } };
}
