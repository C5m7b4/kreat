import { BrowserRouter } from "react-router-dom";
console.log("i am loaded");

// uncomment this out if you are using sass
// import "../../dist/index.css";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
