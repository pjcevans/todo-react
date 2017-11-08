import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native

const config = {
  key: "root",
  storage,
};

const reducer = persistCombineReducers(config, rootReducer);

export default function configureStore(initialState) {
  let store = createStore(
    reducer, composeWithDevTools(
      applyMiddleware()
    ));
  let persistor = persistStore(store);
  return { store, persistor };
}
