import { combineReducers } from "redux";
import { todosLists } from "./todos";
import { toggles } from "./toggles";

export default combineReducers({
  todosLists,
  toggles
});
