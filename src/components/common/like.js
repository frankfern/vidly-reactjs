import React from "react";


export default function Like (props){


  let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    return (
      <i
        className={classes}
        onClick={props.onLikeToggle}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      ></i>
    );
}