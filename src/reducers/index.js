// import { combineReducers } from "redux";
import { data } from "./todos";
import { toggles } from "./toggles";

// Combining reducers is handled by redux-persist
//
// export default combineReducers({
//   todosLists,
//   toggles
// });

export default { data, toggles };
