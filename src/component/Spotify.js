import React from "react";
import "./Spotify.style.css";
import { Link } from "react-router";

const Spotify = () => {
  return (
    <div>
      <nav className="nav2">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzZkbZw4LudvL4dInC9q7AkdlfMXYcBZaIQ&s"
            alt="#"
          />
        </Link>
        <div>
          <a href="https://www.naver.com/">Premium</a>
          <a href="https://www.naver.com/">Support</a>
          <a href="https://www.naver.com/">Download</a>
          <span>|</span>
          <a href="https://www.naver.com/">Sign Up</a>
          <a href="https://www.naver.com/">Login</a>
        </div>
      </nav>
      <main className="main2">
        <div className="main-container">
          <div className="headline">
            <div>Listening is</div>
            <div>everything</div>
          </div>
          <div className="sub-headline">
            Millons of songs and podcasts, No credit card needed.
          </div>
          <div className="button-area">
            <button className="btn2">GET SPOTIFY FREE</button>
          </div>
        </div>
      </main>
      <footer className="footer2">
        <div className="footer-1">
          <div className="footer-2">
            <div className="footer-3">
              <div className="img-box2">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/642/202/non_2x/spotify-icon-spotify-logo-spotify-symbol-logo-set-free-vector.jpg"
                  alt="#"
                />
              </div>
              <ul>
                Company
                <li>About</li>
                <li>Jobs</li>
                <li>For the record</li>
              </ul>

              <ul>
                Communities
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
              </ul>

              <ul>
                Useful Links
                <li>Support</li>
                <li>Web Player</li>
                <li>Free Mobile App</li>
              </ul>
            </div>
            <div className="footer2-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCa8rUxSS0puzXCVlrgyANkgQfSJZUss4fw&s"
                alt="#"
              />
              <img
                src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-instagram-logo-icon-png-image_3588821.jpg"
                alt="#"
              />
              <img
                src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-twitter-icon-png-image_3562007.jpg"
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="footer-4">
              <i class="fa-solid fa-earth-asia"></i>
              <span>korea</span>
            </div>
            <div className="footer-5">
              <div>
                <span>legal</span>
                <span>Privacy Center</span>
                <span>Privacy Policy</span>
                <span>Cookies</span>
                <span>About Ads</span>
                <span>Additional CA Privacy Disclosures</span>
              </div>
              <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>2025 Spotify AB</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Spotify;
