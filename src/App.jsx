import React from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ChartPage from "./components/ChartPage";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Hero />
          <ChartPage />
        </div>
      </div>
    </>
  );
};

export default App;
