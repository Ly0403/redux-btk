import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.min.css"
import { Provider } from "react-redux";
import { configureStorage } from "../src/redux/reducers/configure-store";
import {BrowserRouter} from "react-router-dom"; 

const store = configureStorage();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
