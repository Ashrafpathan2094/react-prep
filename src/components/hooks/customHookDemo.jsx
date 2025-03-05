import React from "react";
import { useCustomHook } from "../../customHooks/useCustom";

const CustomHookDemo = () => {

  const {value} = useCustomHook();
  return <div>{value}</div>;
};

export default CustomHookDemo;