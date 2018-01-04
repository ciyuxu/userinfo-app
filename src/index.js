import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter as Router } from "react-router-redux";
import { Provider } from "react-redux";
import store, { history } from "./store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    
      <App />
    
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
