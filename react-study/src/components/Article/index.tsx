import React from "react";
import { NavLink, Link } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <h1>Article</h1>

      <NavLink to="/">Home</NavLink>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Article;
