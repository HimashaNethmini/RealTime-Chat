import React, { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  // for open and close of the emoji picker
  const [open, setOpen] = useState(false);
  //to handle the emoji function
  const [text, setText] = useState("");

  //function to have the emoji on the text box
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji); //adding the emoji
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="info.png" alt="" />
        </div>
      </div>
      {/* next section - center - text messages */}
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        
      </div>

      {/*  bottom section*/}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message ......"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* adding the emojiPicker library with useState*/}
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />

          <div className="picker">
            {/* giving a function called handleEmoji  */}
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
