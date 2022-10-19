import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <>
      <Post
        userName="Viorel"
        text="This is a test"
        image="https://image.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg"
      />
      <Post
        userName="Diana"
        text="This is another test"
        image="https://img.icons8.com/external-anggara-flat-anggara-putra/344/external-send-email-interface-anggara-flat-anggara-putra.png"
      />
    </>
  );
}

export default Feed;
