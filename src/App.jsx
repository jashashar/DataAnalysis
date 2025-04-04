import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import data from './data/data.json';


const App = () => {
  return (
    <div className="flex h-screen bg-white overflow-auto">
      <Sidebar />
      <main className="main-container flex-1 p-6 bg-[#fafafa] pt-[10px] mb-20">
        <Header data={data} />
        <Dashboard data={data} />
      </main>
    </div>

  );
};

export default App;
