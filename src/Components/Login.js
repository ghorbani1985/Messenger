import React from 'react';

//Image
import googleLogo from 'GoogleLogo.svg';
const Login = () => {
    return (
        <div>
          <div>
            <h2> به نرم افزار پیام رسان پشتیبانی وب سایت خوش آمدید</h2>
          </div>
          <div>
            <img src={googleLogo} alt="googleLogo" />
            ورود با حساب کاربری گوگل
          </div>
        </div>
    );
};

export default Login;