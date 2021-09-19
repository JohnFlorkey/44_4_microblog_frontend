import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  UPDATE_POST,
} from "../actionTypes";

const INITIAL_STATE = {};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COMMENT: {
      const { postID } = action.payload;
      return {
        ...state,
        [postID]: {
          ...state[postID],
          comments: [...state[postID].comments, action.payload.comment],
        },
      };
    }

    case ADD_POST: {
      return { ...state, [action.payload.id]: { ...action.payload.postData } };
    }

    case DELETE_COMMENT: {
      const { postID, commentID } = action.payload;
      return {
        ...state,
        [postID]: {
          ...state[postID],
          comments: state[postID].comments.filter((c) => c.id !== commentID),
        },
      };
    }

    case DELETE_POST: {
      const newState = { ...state };
      delete newState[action.payload.id];
      return { ...newState };
    }

    case UPDATE_POST: {
      const { id, title, description, body } = action.payload;
      return { ...state, [id]: { ...state[id], title, description, body } };
    }

    default:
      return state;
  }
}

export default postReducer;
