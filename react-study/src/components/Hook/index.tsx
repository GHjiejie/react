import { Outlet, Link } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import "./index.css";
// 通过使用createContext创建一个主题上下文，然后使用useContext来获取主题的值，这样就可以实现主题的切换了。
const themeContext = createContext<string>("");

const Mybutton = () => {
  const theme = useContext(themeContext);
  const changeTheme = () => {
    // 这里可以修改主题吗,实际上是可以的,需要将你修改的数据传递到Hook组件,这个涉及到子组件向父组件传递数据(当前的层级是三)
    console.log("theme", theme);
  };
  return (
    <button style={{ background: theme }} onClick={changeTheme}>
      按钮
    </button>
  );
};

// 需要注意，组件的首字母需要大写，否则不会识别为组件
const UseContextDemo = () => {
  const theme = useContext(themeContext);
  console.log("输出theme", theme);
  return (
    <div>
      <h1>useContext</h1>
      <p>当前主题：{theme}</p>
      <Mybutton />
    </div>
  );
};
const Hook = () => {
  // 这里将主题的值存储在state中，然后通过setTheme来修改主题的值，这样就可以实现主题的切换了。
  const [theme, setTheme] = useState("red");
  const changeTheme = () => {
    setTheme(theme === "red" ? "green" : "red");
  };
  return (
    <>
      <themeContext.Provider value={theme}>
        <div className="hooksDiv">
          <Outlet />
        </div>

        <Link to="useEffect">useEffect Demo</Link>

        <Link to="useContext">useContext Demo</Link>

        <button onClick={changeTheme}>修改主题</button>
        <div>
          {/* 使用组件 */}
          <UseContextDemo /> {/* Use the imported component */}
        </div>
        <Link to="useCallback">useCallback</Link>
      </themeContext.Provider>
    </>
  );
};

export default Hook;
