import React from "react";

const Home = React.lazy(() => import("@/components/Home"));
const Article = React.lazy(() => import("@/components/Article"));
const User = React.lazy(() => import("@/components/User"));

const routes = [
  {
    path: "/",
    name: "Home",
    element: Home,
  },
  {
    path: "/article",
    name: "Article",
    element: Article,
  },
  {
    path: "/user/:id",
    name: "User",
    element: User,
  },
];

export default routes;
