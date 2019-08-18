import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDo from "./ToDo";

var destination = document.querySelector("#container")

ReactDOM.render(
    <div>
        <ToDo/>
    </div>,
    destination
);
