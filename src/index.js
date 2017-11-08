import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
const { store, persistor } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      onBeforeLift={onBeforeLift} >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root"));
registerServiceWorker();
