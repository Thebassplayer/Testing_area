import { createContext, useState } from "React";

export const ColorContext = createContext({
  color: null,
});

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(null);
  const value = { color, setColor };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
