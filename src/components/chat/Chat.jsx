import React from 'react'
import "./chat.css"

const Chat = () => {
  return (

    <div className='chat'>
      <div className="top">
        <div className="user">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <span>Ariana Grande</span>
              <p>bjkfuqhfu HAULDUIQWiijewfjwejfj</p>
            </div>
          </div>
{/* make the icon section of chat part */}
      <div className="icons">
        <img src="./phone.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./info.png" alt="" />
      </div>
      </div>

      <div className="center"></div>
      <div className="buttom"></div>
    </div>
  )
}

export default Chat