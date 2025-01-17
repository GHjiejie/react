import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

const User = () => {
  const userParams = useParams();
  const serachParams = useSearchParams();
  const location = useLocation();
  console.log("useParams", userParams);
  console.log("searchParams", serachParams);
  console.log("location", location);
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>User</h1>
      <h2 onClick={backHome}>back to home</h2>
    </div>
  );
};

export default User;
