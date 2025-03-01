import React from "react";
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = () => {
  return (
    <div>
      ChildComponent
      <div>
        <GrandChildComponent />
      </div>
    </div>
  );
};

export default ChildComponent;
