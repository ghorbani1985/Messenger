import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Login from "./Components/Login";
function App() {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      <Login />
    </div>
  );
}

export default App;
