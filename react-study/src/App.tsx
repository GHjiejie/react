import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>hello</div>
      <div>count: {count}</div>
      <h2>使用自定义的事件实现状态的更改</h2>
      <button onClick={handleClick}>Click me</button>
      <h2>直接在内部实现</h2>
      <button onClick={() => setCount(count + 1)}>Click me </button>
    </>
  );
}

export default App;
