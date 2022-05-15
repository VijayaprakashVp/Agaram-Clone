import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const NavBar = () => {
  return (
    <div>
      <div className="alumni-queries">
        <div className="alumni-corner">Alumni Corner</div>
        <div className="have_queries">
          Have any queries? Whatsapp us at +91-98418 91000
          <div className="social-media-icon">
            <p>
              <FacebookIcon />
            </p>
            <p>
              <InstagramIcon />
            </p>
            <p>
              <YouTubeIcon />
            </p>
            <p>
              <TwitterIcon />
            </p>
            <p>
              <LinkedInIcon />
            </p>
          </div>
        </div>
      </div>
      <div className="logo_menu">
        <div>
          <Link to={"/"}>
            <img
              src="https://i.ibb.co/6FGnj3B/Image20220515180845.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="menu-list">
          <p>Home</p>
          <p>Who We Are</p>
          <p>What We Do</p>
          <p>Be A Part With Us</p>
          <p>Magazine</p>
          <p>Gallery</p>
          <p>Agaram Tv</p>
          <p>FAQ</p>
          <p>Contact</p>
          <Link
            to={"/Donate"}
            style={{ textDecoration: "none", transition: "none" }}
          >
            <p className="donate-menu">Donate</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
