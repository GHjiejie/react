import React, { Suspense } from "react";
import routes from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const renderRoutes = (routes) =>
    routes.map((route, index) => {
      if (route.children) {
        return (
          <Route key={index} path={route.path} element={<route.element />}>
            {renderRoutes(route.children)}
          </Route>
        );
      }
      return (
        <Route key={index} path={route.path} element={<route.element />} />
      );
    });

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
