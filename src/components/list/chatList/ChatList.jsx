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
          onClick={() => setAddMode ((prev) => !prev)}  //change the prev state to opposite
        />
      </div>

      {/* next section */}
      {/* first person */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ariana Grande</span>
          <p>Hello</p>
        </div>
      </div>
      {/* second person */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ariana Grande</span>
          <p>Hello</p>
        </div>
      </div>
      {/* third person */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ariana Grande</span>
          <p>Hello</p>
        </div>
      </div>

    </div>
  )
}

export default ChatList