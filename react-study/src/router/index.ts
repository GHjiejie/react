import React from "react";

const Home = React.lazy(() => import("@/components/Home"));
const Article = React.lazy(() => import("@/components/Article"));
const User = React.lazy(() => import("@/components/User"));

const About = React.lazy(() => import("@/components/About"));
const Email = React.lazy(() => import("@/components/About/components/email"));
const Phone = React.lazy(() => import("@/components/About/components/phone"));

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
  {
    path: "/about",
    name: "About",
    element: About,
    children: [
      {
        path: "email",
        name: "Email",
        element: Email,
      },
      {
        path: "phone",
        name: "Phone",
        element: Phone,
      },
    ],
  },
];

export default routes;
