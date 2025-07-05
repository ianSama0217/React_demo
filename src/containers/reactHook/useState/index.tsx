import React, { useState } from "react";

const UseStateDemo: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  const [inputVal, setInputVal] = useState<string>("");

  function plusNum() {
    setNum((num) => num + 1);
  }

  function minusNum() {
    setNum((num) => num - 1);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(e.target.value);
  }

  return (
    <div>
      <span>num value: {num}</span>
      <button type="button" onClick={plusNum}>
        plus 1
      </button>
      <button type="button" onClick={minusNum}>
        minus 1
      </button>

      <input type="text" value={inputVal} onChange={(e) => handleInput(e)} />
      <span>input value: {inputVal}</span>
    </div>
  );
};

export default UseStateDemo;
