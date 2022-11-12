import React from 'react';


const Navbar = ({ logoutHandler }) => {
  return (
    <div className="bg-gradient-to-r from-white shadow w-full ">
      <div className="container flex justify-between items-center p-3">
        <h2 className="font-bold text-white drop-shadow-2xl">
          نرم افزار پشتیبانی وب سایت
        </h2>
        <button
          className="px-8 py-2 bg-red-500 transition-all ease-in-out duration-500 hover:bg-red-700 rounded-lg text-white font-bold"
          onClick={logoutHandler}
        >
          خروج
        </button>
      </div>
    </div>
  );
};

export default Navbar;