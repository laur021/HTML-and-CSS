import React from "react";
import ReactDOM from "react-dom";
import * as pie from "./math.jsx";

ReactDOM.render(
  <div>
    <ul>
      <li>{pie.default}</li>
      <li><pie.DoublePi /></li>
      <li><pie.TriplePi /></li>
    </ul>
  </div>,
  document.getElementById("root")
);
