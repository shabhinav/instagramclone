import React, { useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, imageUrl, caption }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt=""
          src="https://images.unsplash.com/photo-1604845933140-4ea8c0a56d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        />
        <h3>{username}</h3>
      </div>

      <img className="post_image" src={imageUrl} alt="" />
      <h4 className="post_text">
        <strong>{username}</strong>:{caption}
      </h4>
    </div>
  );
}

export default Post;
