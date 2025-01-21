const useMemo = () => {
  return (
    <>
      <h2>useMemo(calculateValue, dependencies)</h2>
      <ul>
        <li>
          calculateValue：要缓存计算值的函数。它应该是一个没有任何参数的纯函数，并且可以返回任意类型。React
          将会在首次渲染时调用该函数；在之后的渲染中，如果 dependencies
          没有发生变化，React 将直接返回相同值。否则，将会再次调用
          calculateValue 并返回最新结果，然后缓存该结果以便下次重复使用。
        </li>
        <li>
          dependencies：所有在 calculateValue
          函数中使用的响应式变量组成的数组。响应式变量包括 props、state
          和所有你直接在组件中定义的变量和函数。如果你在代码检查工具中 配置了
          React，它将会确保每一个响应式数据都被正确地定义为依赖项。依赖项数组的长度必须是固定的并且必须写成
          [dep1, dep2, dep3] 这种形式。React 使用 Object.is
          将每个依赖项与其之前的值进行比较。
        </li>
      </ul>
    </>
  );
};

export default useMemo;
