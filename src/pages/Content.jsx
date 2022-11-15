import React from "react";
import "./Content.css";

export default function Content(props) {
  return (
    <div className='content'>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.children}
      </div>
    </div>
  );
}
