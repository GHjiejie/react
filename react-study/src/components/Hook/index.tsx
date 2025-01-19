import { Outlet, Link } from "react-router-dom";
const Hook = () => {
  return (
    <>
      <h3>hooks demo</h3>
      <Link to="useEffect">useEffect Demo</Link>
      <div className="hooksDiv">
        <Outlet />
      </div>
    </>
  );
};

export default Hook;
