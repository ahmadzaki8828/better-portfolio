import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactGa from "react-ga4";

ReactGa.initialize("G-BRW4WQ3QV1");

ReactGa.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
