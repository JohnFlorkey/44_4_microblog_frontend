import {
  ADD_TITLE,
  DELETE_TITLE,
  LOAD_TITLES,
  UPDATE_TITLE,
  UPDATE_TITLE_VOTES,
} from "../actions/actionTypes";
function titleReducer(state = [], action) {
  switch (action.type) {
    case ADD_TITLE:
      return [...state, { ...action.payload }];

    case DELETE_TITLE:
      return state.filter((t) => t.id !== action.payload);

    case LOAD_TITLES:
      return [...action.payload];

    case UPDATE_TITLE:
      return state.map((t) =>
        t.id === action.payload.id ? { ...action.payload } : { ...t }
      );

    case UPDATE_TITLE_VOTES: {
      const { id, votes } = action.payload;
      return state.map((t) =>
        t.id === id ? { ...t, votes: votes } : { ...t }
      );
    }

    default:
      return state;
  }
}

export default titleReducer;
