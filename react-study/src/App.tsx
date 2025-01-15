const Button = () => {
  return (
    <>
      <button>Click me</button>
    </>
  );
};

const User = (props: any) => {
  console.log(props);

  return (
    <div>
      <h1>hello</h1>
      <h2>{props.userInfo.name}</h2>
    </div>
  );
};

function App() {
  return (
    <>
      <User userInfo={{ name: "jie" }}></User>
    </>
  );
}

export default App;
