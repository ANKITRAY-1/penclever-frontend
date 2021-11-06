import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Stats = () => {
  return (
    <div>
      <div className="app">
        <Header />
        <div className="wrapper">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
