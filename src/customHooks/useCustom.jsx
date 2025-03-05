import { useEffect,useState } from "react";

export const useCustomHook = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(1);
  }, []);

  return { value };
};
