import React from 'react';
import "./list.css";
import Userinfo from "../list/userInfo/Userinfo";
import ChatList from "../list/chatList/ChatList.jsx";

const List = () => {
  return (
    <div className='list'>
      <Userinfo />
      <ChatList />
    </div>
  )
}

export default List