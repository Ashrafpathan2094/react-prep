import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export const ThemeContext = React.createContext();

const ParentComp = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>ParentComponent</div>
        <ChildComponent />
    </ThemeContext.Provider>
  );
};

export default ParentComp;
