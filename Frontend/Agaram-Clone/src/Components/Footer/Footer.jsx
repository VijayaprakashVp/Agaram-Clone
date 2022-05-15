import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      {/* <div className="map">
        <img src="https://ibb.co/JCyS6PM" alt="" />
      </div> */}
      <div className="footer">
        <div className="footer-div">
          <div className="footer-left">
            <div className="img-div">
              <Link to={"/"}>
                <img src="https://s1.agaram.in/img/lazy/dlogo.png" alt="" />
              </Link>
            </div>
            <h1>
              <span
                style={{
                  color: "#ff6839",
                  fontFamily: "caveat,cursive",
                  // fontSize: "50px",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                #change
              </span>
              a
              <span
                style={{
                  color: "#ff6839",
                  fontFamily: "caveat,cursive",
                  // fontSize: "50px",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                life
              </span>
            </h1>
            <div className="social-icons">
              <p>
                <Link to={"#"}>
                  <FacebookIcon style={{ color: "#4f6aa3" }} />
                </Link>
              </p>
              <p>
                <Link to={"#"}>
                  <InstagramIcon style={{ color: "#e4457b" }} />
                </Link>
              </p>
              <p>
                <Link to={"#"}>
                  <YouTubeIcon style={{ color: "#1ab7f2" }} />
                </Link>
              </p>
              <p>
                <Link to={"#"}>
                  <TwitterIcon style={{ color: "#34abf3" }} />
                </Link>
              </p>
              <p>
                <Link to={"#"}>
                  <LinkedInIcon style={{ color: "#1a85bd" }} />
                </Link>
              </p>
            </div>
          </div>
          <div className="footer-right">
            <h1>Contact Us</h1>
            <hr
              style={{
                color: "red",
                border: "1px solid white",
                margin: "5%",
                width: "20%",
              }}
            />
            <div>
              <div className="address-number">
                <p>
                  <PinDropIcon style={{ color: "#ff5722" }} />
                </p>
                <p>15, Krishna street, T.Nagar, Chennai - 600 017</p>
              </div>
              <div className="address-number">
                <p>
                  <CallIcon style={{ color: "#ff5722" }} />
                </p>
                <p>Support: +91 98418 91000</p>
              </div>
              <div className="address-number">
                <p>
                  <DraftsIcon style={{ color: "#ff5722" }} />
                </p>
                <p>Email: info@agaram.in</p>
              </div>
            </div>
            <div className="query-email">
              <p>
                <input type="text" placeholder="Enter Email" />
              </p>
              <p>
                <button>Submit</button>
              </p>
            </div>
          </div>
          <div className="copyright-div">
            <div>
              <p>
                2022
                <span style={{ fontWeight: "600", color: "white" }}>
                  Agaram
                </span>
                . All rights reserved. Powered By{" "}
                <span style={{ fontWeight: "600", color: "white" }}>Gyso</span>.
              </p>
            </div>
            <div className="privacy-policy">
              <p>
                <Link
                  to={"#"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link
                  to={"#"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Us
                </Link>
              </p>
              <p>
                <Link
                  to={"#"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Terms of Use
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
