import React from "react";
import "./Google.style.css";
import { Link } from "react-router";

const Google = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <div>
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          <i class="fa-solid fa-flask"></i>
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
      <div className="main">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          alt="#"
          style={{ width: "272px", height: "92px" }}
        />
        <div className="input-area">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input type="text" className="input-box"/>
          <i class="fa-solid fa-microphone mic-icon"></i>
        </div>
        <div>
          <button>Google search</button>
          <button>I`m feeling lucky</button>
        </div>
        <div className="offered">
          Google offered in:
          <a href="#">한국어</a>
          <a href="#">日本語</a>
          <a href="#">中國語</a>
          <a href="#">English</a>
        </div>
      </div>
      <div className="footer">
        <div>Korea</div>
        <div className="footer2">
          <span>
            <a href="#">About</a>
            <a href="#">Advertise</a>
            <a href="#">Business</a>
            <a href="#">How Search Work</a>
          </span>
          <span>
            <a href="#">Privacy</a>
            <a href="#">Term</a>
            <a href="#">Settings</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Google;
