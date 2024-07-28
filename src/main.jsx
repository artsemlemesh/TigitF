import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import GlobalState from "./GlobalContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <GlobalState>
        <App />
      </GlobalState>
    </Provider>
  // </React.StrictMode>
);
