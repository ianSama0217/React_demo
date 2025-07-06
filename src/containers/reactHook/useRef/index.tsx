import React, { useEffect, useRef } from "react";

const UseRefDemo: React.FC = () => {
  const intervalRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("tick");
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <div>
      <p>Timer running...</p>

      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleClick}>
        foucs input
      </button>
    </div>
  );
};

export default UseRefDemo;
