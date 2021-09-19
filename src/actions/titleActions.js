import axios from "axios";
import {
  ADD_TITLE,
  DELETE_TITLE,
  LOAD_TITLES,
  UPDATE_TITLE,
  UPDATE_TITLE_VOTES,
} from "./actionTypes";

export function addTitle(id, title, description, body, votes) {
  return { type: ADD_TITLE, payload: { id, title, description, body, votes } };
}

export function deleteTitle(id) {
  return { type: DELETE_TITLE, payload: id };
}

export function getTitlesFromAPI() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:5000/api/posts");
    dispatch(loadTitles(response.data));
  };
}

export function loadTitles(titles) {
  return { type: LOAD_TITLES, payload: titles };
}

export function updateTitle(id, title, description, votes) {
  return { type: UPDATE_TITLE, payload: { id, title, description, votes } };
}

export function updateTitleVotes(id, votes) {
  return { type: UPDATE_TITLE_VOTES, payload: { id, votes } };
}
