import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PostComponent from "./PostComponent";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);


  //axios example
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts", {})
  //       .then(function (response) {
  //         console.log(response);
  //         setUser(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }, [count]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [count]);

  const setErrorFunc = () => {
    setError(`This is an error ${count}`);
    setCount(count + 1);
  };
  return (
    <>
      <div>This is a post page</div>
      <div>{error}</div>

      {user &&
        user.map((item) => (
          <div key={item?.id}>
            <PostComponent
              item={item}
              error={error}
              setErrorFunc={setErrorFunc}
            />
          </div>
        ))}
    </>
  );
};

export default Admin;
