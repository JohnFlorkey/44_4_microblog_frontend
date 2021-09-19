import {
  ADD_TITLE,
  DELETE_TITLE,
  LOAD_TITLES,
  UPDATE_TITLE,
} from "../actionTypes";
function titleReducer(state = [], action) {
  switch (action.type) {
    case ADD_TITLE:
      return [...state, { ...action.payload }];

    case DELETE_TITLE:
      return state.filter((t) => t.id !== parseInt(action.payload));

    case LOAD_TITLES:
      return [...action.payload];

    case UPDATE_TITLE:
      return state.map((t) =>
        t.id === parseInt(action.payload.id) ? { ...action.payload } : { ...t }
      );

    default:
      return state;
  }
}

export default titleReducer;
