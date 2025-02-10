import { NavLink, Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  const navigate = useNavigate();
  const goArticle = () => {
    navigate("/article");
  };
  return (
    <div>
      <h1>Home</h1>
      <Button type="primary">Button</Button>
      <h2>Navlink实现跳转</h2>
      <NavLink to="/article">Article(navlink)</NavLink>
      <h2>Link实现跳转</h2>
      <Link to="/article">article(link)</Link>
      <h2>Navigate实现跳转(编程式导航)</h2>
      <button onClick={goArticle}>点击跳转到article页面</button>
      <h2>用户详情页</h2>
      <Link to="/user/1">用户1</Link>
      <h1>About</h1>
      <Link to="/about">关于</Link>

      <Link to="/hook">各种hook的使用</Link>

      <Link to="render">渲染过程</Link>
    </div>
  );
};

export default Home;
