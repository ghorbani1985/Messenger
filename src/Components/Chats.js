import React, { useState, useEffect, useContext } from 'react';
import useTitle from '../Hooks/useTitle';
import { auth } from '../Firebase';
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from 'axios';
//Components
import Navbar from './Navbar';
//Context
import { AuthContext } from '../context/AuthContextProvider';
const Chats = () => {
  useTitle("پشتیبانی وب سایت");
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
      const navigate = useNavigate();
  useEffect(() => {
      if(!user) {
        navigate("/");
        return;
      }
      axios.get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "c76b1138-1b35-4092-b0a9-9144cc864d15",
          "user-name": user.email,
          "user-secret": user.uid
        },
      })
      .then(() => {
      setLoading(false)
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL)
        .then(avatar => {
          formdata.append("avatar", avatar, avatar.name)
          axios.post("https://api.cchatengine.io/users/", formdata, {
            headers: {
              "private-key": "baa875c2-d664-4fa5-a1f4-599fe675ace6"
            }
          })
          .then(() => setLoading(false))
          .catch(error => console.log(error))
        })
      })
  }, [user, navigate])
 
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
  }

  const logoutHandler = async () => {
    await auth.signOut();
   navigate("/");
  }
  if(!user || loading) return "لطفا صبر نمایید..."
    return (
      <div>
        <Navbar logoutHandler={logoutHandler} />

        <ChatEngine height="calc(100vh - 100px" projectID="c76b1138-1b35-4092-b0a9-9144cc864d15" userName="user.email" userSecret="user.uid" />
      </div>
    );
};

export default Chats;