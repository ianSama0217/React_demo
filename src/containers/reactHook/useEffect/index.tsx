import React, { useEffect, useState } from "react";

const UseEffectDemo: React.FC = () => {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    console.log("num was changed");
  }, [num]);

  useEffect(() => {
    alert("welcome to useEffect demo"); // 測時環境中 render 會執行兩次
  }, []);

  return (
    <div>
      <span>num is {num}</span>
      <button
        type="button"
        onClick={() => {
          setNum((num) => num + 1);
        }}
      >
        plus 1
      </button>
      <button
        type="button"
        onClick={() => {
          setNum(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default UseEffectDemo;
