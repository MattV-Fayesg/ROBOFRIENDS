import React from "react";

const scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderRadius: "22px",
        boxShadow: "inset 5px 5px 60px #6b7b97, inset -5px -5px 10px #ffffff",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default scroll;
