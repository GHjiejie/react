import React from "react";

const Home = React.lazy(() => import("@/components/Home"));
const Article = React.lazy(() => import("@/components/Article"));

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
];

export default routes;
