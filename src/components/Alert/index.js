import React from "react";
import "./style.css";

function Alert(props) {
  return (
    <div>
      <p className="alert">{props.message}</p>
    </div>
  );
}

export default Alert;
