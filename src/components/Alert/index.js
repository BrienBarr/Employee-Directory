import React from "react";
import "./style.css";

function Alert(props) {
  return (
    <div
      // role="alert"
      // className={`alert alert-${props.type} fade in`}
      // style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
    >
      <p>{props.message}</p>
    </div>
  );
}

export default Alert;
