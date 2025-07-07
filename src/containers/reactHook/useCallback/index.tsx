import React, { useState, useCallback } from "react";

// 子元件接收 callback 作為 props
const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("🔄 Child component rendered");
  return <button onClick={onClick}>plus 1</button>;
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 用 useCallback 記憶這個函數，只有 count 改變時才會建立新函數
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h3>計數：{count}</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="輸入文字"
      />
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackDemo;
