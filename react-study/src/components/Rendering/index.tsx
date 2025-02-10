import { useState, memo } from "react";

type SonProps = {
  count: number;
};

// 使用 React.memo 包裹 Son 组件，使其只在 props 发生变化时才重新渲染（当前传递的props是count)
// 也就是说，只有当 count 发生变化时，Son 组件才会重新渲染，否则不会重新渲染，不然父组件重新渲染的时候下面的所有的子组件都会出现渲染
const Son = memo(({ count }: SonProps) => {
  console.log("Son Component Rendered!");
  //   console.log("props:", props);
  return (
    <>
      <p>This is Son component!</p>
      <p>父组件传递的props: {count}</p>
    </>
  );
});

const Parent = () => {
  console.log("Parent Component Rendered!");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  console.log("count:", count);

  const handleClick = (type: string) => {
    if (type === "count") {
      setCount(count + 1);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <>
      <h1>This is Parent Component!</h1>
      <button onClick={() => handleClick("count")}> count++</button>
      <button onClick={() => handleClick("number")}> number++</button>
      <span>count: {count}</span>
      <span>number: {number}</span>
      {/* 将 count 作为 prop 传递给 Son 组件 */}
      <Son count={count}></Son>
    </>
  );
};

export default Parent;
