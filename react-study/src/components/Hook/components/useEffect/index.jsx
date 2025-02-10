import { useEffect, useState } from "react";

const useEffectDemo = () => {
  console.log("useEffectDemo render");
  // 定义状态变量
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 定义事件处理函数
  const changeCount = () => setCount(count + 1);
  const changeName = () => setName(`name${count}`);

  // 使用钩子函数
  // useEffect在检测到count变化时，会执行回调函数（通常在这里面发起异步请求）
  useEffect(() => {
    const viewVar = () => {
      console.log("count changed");
    };
    viewVar();
  }, [count]);

  // 返回JSX结构
  return (
    <>
      <h1>useEffectDemo</h1>
      <button onClick={changeCount}>count change</button>
      <button onClick={changeName}>name change</button>
      <div>{count}</div>
      <div>{name}</div>
    </>
  );
};

export default useEffectDemo;
