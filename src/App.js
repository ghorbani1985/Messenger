import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Login from "./Components/Login";
import Chats from "./Components/Chats";

//Contexts
import AuthContextProvider from "./context/AuthContextProvider";
function App() {
  return (
    <div
      dir="rtl"
      className="w-full bg-gradient-to-br from-slate-800 to-slate-800 h-screen"
    >
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
