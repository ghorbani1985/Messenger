import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Login from "./Components/Login";
function App() {
  return (
    <div dir="rtl" className="w-full bg-gradient-to-tr from-amber-500 min-h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
