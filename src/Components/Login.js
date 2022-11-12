import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../Firebase'; 
import useTitle from '../Hooks/useTitle';
//Image
import googleLogo from '../assets/images/svg/google.svg';
const Login = () => {
  useTitle("ورود به سیستم پشتیبانی وب سایت");
    return (
      <div className="min-h-screen flex justify-center items-center">
      <div className="w-full md:w-1/2 mr-2 ml-2 md:m-0 flex shadow-2xl flex-col justify-center items-center bg-gray-100 rounded-lg border-2 border-slate-800 border-dotted p-3 md:p-10 text-center">
        <h2 className="text-lg font-bold text-sky-500 my-8 leading-9">
          به نرم افزار پشتیبانی وب سایت خوش آمدید
        </h2>
        <span className="w-2/5 h-0.5 bg-amber-500 rounded-xl mb-8"></span>
        <div onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} className="flex justify-center items-center bg-green-500 cursor-pointer transition-all ease-in-out duration-500 hover:bg-green-700 rounded-lg p-3 text-white">
          <img src={googleLogo} alt="googleLogo" className="w-6 h-6" />
          <span className="mr-2">ورود با حساب کاربری گوگل</span>
        </div>
      </div>
      </div>
    );
};

export default Login;