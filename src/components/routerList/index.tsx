import React from "react";
import { routerListData } from "./router.tsx";
import { Routes, Route, Link } from "react-router-dom";

const RouterList: React.FC = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "1px solid black",
        }}
      >
        {routerListData.map((item: any, index: number) => (
          <Link key={index} to={item.path}>
            {item.title}
          </Link>
        ))}
      </div>

      <Routes>
        {routerListData.map((item: any, index: number) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
};

export default RouterList;
