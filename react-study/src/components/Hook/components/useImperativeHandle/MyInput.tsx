import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef((props, ref) => {
  console.log("props", props);
  const curretRef = useRef<HTMLInputElement>(null);

  // 使用 useImperativeHandle 来控制暴露给父组件的实例值
  useImperativeHandle(ref, () => ({
    focus() {
      curretRef.current?.focus();
    },
    alertMessage() {
      alert("Hello from Child!");
    },
    sayHello() {
      console.log("Hello from Child!");
    },
  }));

  return <input type="text" ref={curretRef} />;
});

export default Child;
