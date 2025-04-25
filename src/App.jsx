import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-default min-h-screen bg-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
