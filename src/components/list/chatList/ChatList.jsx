import React, { useState } from 'react';
import "./chatList.css";

const ChatList = () => {
  
  const [addMode, setAddMode] = useState(false) //for -,+ button
  return (
    <div className='chatList'>

      {/* search container */}
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search'/>
        </div>
        
        {/* utilize usestate hook to change the state of the ( + & - )button */}
        <img
          src={addMode ? "./minus.png" : "./plus.png"} 
          alt="" 
          className="add"
          onClick={() => setAddMode ((prev) => !prev)} 
        />
      </div>

    </div>
  )
}

export default ChatList