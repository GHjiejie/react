import { NavLink, Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goArticle = () => {
    navigate("/article");
  };
  return (
    <div>
      <h1>Home</h1>
      <h2>Navlink实现跳转</h2>
      <NavLink to="/article">Article(navlink)</NavLink>
      <h2>Link实现跳转</h2>
      <Link to="/article">article(link)</Link>
      <h2>Navigate实现跳转(编程式导航)</h2>
      <button onClick={goArticle}>点击跳转到article页面</button>
    </div>
  );
};

export default Home;
