import React, { useReducer } from "react";

// 1. 定義 state 結構
type State = {
  count: number;
};

// 2. 定義 action 類型
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// 3. 寫 reducer 函數
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

// 4. 使用 useReducer 在元件中
function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>計數：{state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default UseReducerDemo;
