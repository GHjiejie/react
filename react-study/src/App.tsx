const Button = () => {
  return (
    // 下面的写法实际上直接等价于<button>Click me</button>
    <>
      <button>Click me</button>
    </>
  );
};

const User = () => {
  return (
    <div>
      <h1>hello</h1>
      <h2>world</h2>
    </div>
  );
};

// JSX语法不支持直接返回多个元素，但是可以使用Fragment组件包裹多个元素，Fragment组件可以简写为<></>。
function App() {
  return (
    <>
      <div className="app">
        <Button></Button>
      </div>
      <User></User>
    </>
  );
}

export default App;
