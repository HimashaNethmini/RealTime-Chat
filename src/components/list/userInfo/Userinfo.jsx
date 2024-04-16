import React from "react";
import "./userInfo.css";

const Userinfo = () => {
  return (

    <div className="userInfo">
      {/* user image n name section */}
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Ariana Grande</h2>
      </div>

      {/* section */}
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
