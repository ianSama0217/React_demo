import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

const UseContextDemo: React.FC = () => {
  return (
    <div>
      <ThemeContext.Provider value="dark">
        <Child />
      </ThemeContext.Provider>
    </div>
  );
};

function Child() {
  const theme = useContext(ThemeContext); // 讀取 context 值
  return <div>Current theme: {theme}</div>;
}

export default UseContextDemo;
