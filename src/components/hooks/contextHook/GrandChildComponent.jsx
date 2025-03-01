import React, { useContext } from "react";
import { ThemeContext } from "./ParentComp";

const GrandChildComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
    <div>
      GrandChildren
      <div>Theme: {theme}</div>
      <button onClick={()=>setTheme("white")}>White</button>
    </div>
  );
};

export default GrandChildComponent;
