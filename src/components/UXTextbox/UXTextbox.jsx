import React from "react";
import "./UXTextbox.css";

const UXTextbox = (props) => {
  return (
    <input
      id={props.id && props.id}
      type={props.type && props.type}
      className={props.className && props.className}
      value={props.value && props.value}
      placeholder={props.placeholder && props.placeholder}
      onChange={(e) => props.onEdit(e.target.value)}
    ></input>
  );
};

export default UXTextbox;
