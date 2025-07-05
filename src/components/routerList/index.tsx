import React from "react";
import { routerListData } from "./router.tsx";
import { Routes, Route, Link } from "react-router-dom";

const RouterList: React.FC = () => {
  return (
    <div>
      <Routes>
        {routerListData.map((item: any, index: number) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      {routerListData.map((item: any, index: number) => (
        <Link key={index} to={item.path}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default RouterList;
