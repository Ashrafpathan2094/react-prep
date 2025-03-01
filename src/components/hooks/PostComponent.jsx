import React from "react";

const PostComponent = ({ item, error, setErrorFunc }) => {
  return (
    <>
      <div>Body:{item?.body}</div>
      <div>title:{item?.title}</div>
      <button type="button" onClick={setErrorFunc}>Click me</button>
    </>
  );
};

export default PostComponent;
