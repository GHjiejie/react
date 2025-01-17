import React, { Suspense } from "react";
import routes from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 一定要使用BrowserRouter组件来包裹Routes组件，这样就会有历史记录，可以通过浏览器的前进和后退按钮来切换路由。

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => {
            return (
              route.element && (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
              )
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
