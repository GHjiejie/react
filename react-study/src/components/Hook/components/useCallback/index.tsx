import React, { useState, useCallback } from "react";
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []); // 这里依赖数组为空，所以这个函数只会在初始渲染时创建一次

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child component re-rendered");

  return <button onClick={onClick}>Click me!</button>;
});

export default ParentComponent;
