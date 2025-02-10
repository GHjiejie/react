import React from "react";

const Home = React.lazy(() => import("@/components/Home"));
const Article = React.lazy(() => import("@/components/Article"));
const User = React.lazy(() => import("@/components/User"));

const About = React.lazy(() => import("@/components/About"));
const Email = React.lazy(() => import("@/components/About/components/email"));
const Phone = React.lazy(() => import("@/components/About/components/phone"));

const Render = React.lazy(() => import("@/components/Rendering"));
const Hook = React.lazy(() => import("@/components/Hook"));

const UseEffect = React.lazy(
  () => import("@/components/Hook/components/useEffect")
);
const UseContext = React.lazy(
  () => import("@/components/Hook/components/useContext")
);

const UseCallback = React.lazy(
  () => import("@/components/Hook/components/useCallback")
);

const useImperativeHandle = React.lazy(
  () => import("@/components/Hook/components/useImperativeHandle")
);

const useActionState = React.lazy(
  () => import("@/components/Hook/components/useActionState")
);

const useMemo = React.lazy(
  () => import("@/components/Hook/components/useMemo")
);
const useReducer = React.lazy(
  () => import("@/components/Hook/components/useReducer")
);
const routes = [
  {
    path: "/hook",
    name: "Hook",
    element: Hook,
    children: [
      {
        path: "useEffect",
        name: "UseEffect",
        element: UseEffect,
      },
      {
        path: "useContext",
        name: "UseContext",
        element: UseContext,
      },
      {
        path: "useCallback",
        name: "UseCallback",
        element: UseCallback,
      },
      {
        path: "useImperativeHandle",
        name: "useImperativeHandle",
        element: useImperativeHandle,
      },
      {
        path: "useActionState",
        name: "useActionState",
        element: useActionState,
      },
      {
        path: "useMemo",
        name: "useMemo",
        element: useMemo,
      },
      {
        path: "useReducer",
        name: "useReducer",
        element: useReducer,
      },
    ],
  },
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
  {
    path: "/render",
    name: "Render",
    element: Render,
  },
];

export default routes;
