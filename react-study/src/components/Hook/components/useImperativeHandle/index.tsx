import React, { useRef } from "react";
import Child from "./MyInput";

const Parent = () => {
  const childRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // 当点击按钮时，调用子组件的方法
    if (childRef.current) {
      // childRef.current.alertMessage();
      // childRef.current.sayHello();
      childRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleClick}>Call Child Method</button>
      <Child ref={childRef} />
    </div>
  );
};

export default Parent;
