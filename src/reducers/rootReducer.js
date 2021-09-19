import { combineReducers } from "redux";
import postReducer from "./postReducer";
import titleReducer from "./titleReducer";

const rootReducer = combineReducers({
  titles: titleReducer,
  posts: postReducer,
});

export default rootReducer;
