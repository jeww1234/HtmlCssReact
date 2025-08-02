import React from "react";
import "./Google.style.css";
import { Link } from "react-router";

const Google = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <div>
          <a href="https://www.google.com/">Gmail</a>
          <a href="https://www.google.com/">Images</a>
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
          <a href="https://www.google.com/">한국어</a>
          <a href="https://www.google.com/">日本語</a>
          <a href="https://www.google.com/">中國語</a>
          <a href="https://www.google.com/">English</a>
        </div>
      </div>
      <div className="footer">
        <div>Korea</div>
        <div className="footer2-11">
          <span>
            <a href="https://www.google.com/">About</a>
            <a href="https://www.google.com/">Advertise</a>
            <a href="https://www.google.com/">Business</a>
            <a href="https://www.google.com/">How Search Work</a>
          </span>
          <span>
            <a href="https://www.google.com/">Privacy</a>
            <a href="https://www.google.com/">Term</a>
            <a href="https://www.google.com/">Settings</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Google;
