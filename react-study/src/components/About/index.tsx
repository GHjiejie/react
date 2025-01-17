import { Outlet, Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">back to home</Link>
      <Link to="email">view email</Link>
      <Link to="phone"> view phone</Link>
      <div>
        <h1>这个是子路由的部分</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
