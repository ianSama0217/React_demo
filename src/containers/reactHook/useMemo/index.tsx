import React, { useMemo, useState } from "react";

// 模擬一個非常耗時的運算
function expensiveCalculation(num: number) {
  console.log("計算中...");
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num;
  }
  return result;
}

const UseMemoDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<number>(1);

  // 只有當 input 改變時，才會重新計算
  const calculatedValue = useMemo(() => {
    return expensiveCalculation(input);
  }, [input]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>耗時運算結果：{calculatedValue}</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <br />
      <button onClick={() => setCount(count + 1)}>點我增加計數：{count}</button>
    </div>
  );
};

export default UseMemoDemo;
