import React, { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false); //for -,+ button

  return (
    <div className="chatList">
     <div className="search">
      <div className="searchBar">
        <img src="./search.png" alt="" />
        <input type="text" placeholder="search" />
      </div>
      <img src="./plus.png" alt="" />
     </div>  
    </div>
  );
};

export default ChatList;
