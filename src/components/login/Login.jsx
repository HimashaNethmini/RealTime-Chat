import React, { useState } from "react";
import "./login.css";

const login = () => {
  //set an avatar until an image is uploaded by the user
  const [avatar, setAvatar] = useState({
    file:null, //beginning no file
    url: ""
  })

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        {/* login form */}
        <form>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">
            <img src="" alt="" />
            Upload an image</label>
          <input type="file" id="file" style={{display:"none"}} />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default login;
