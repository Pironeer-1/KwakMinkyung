import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import CommentList from "./CommentList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
