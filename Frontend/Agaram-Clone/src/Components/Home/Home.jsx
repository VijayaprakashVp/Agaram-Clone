import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "./Home.css";

export const Home = () => {
  var [slideshowcount, setSlideshowcount] = useState(0);

  let images = [
    "https://s1.agaram.in/img/webp-img/agaram_slider-s1.webp",
    "https://s1.agaram.in/img/webp-img/agaram_slider-s2.webp",
  ];

  // console.log("slideshowcount previous:", slideshowcount);
  const handleChangeImage = () => {
    if (slideshowcount == images.length - 1) {
      // console.log("slideshowcount :", slideshowcount);
      return setSlideshowcount(0);
    }
    slideshowcount += 1;
    setSlideshowcount(slideshowcount);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div className="slideshow-div">
          <img src={images[slideshowcount]} alt="" />
          <div>
            <button onClick={handleChangeImage}>
              <NavigateBeforeIcon />
            </button>
            <button onClick={handleChangeImage}>
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <div className="Agaram-Foundation">
          <div className="Agaram-Foundation-text">
            <h1>
              Welcome To <span style={{ color: "#ff5722" }}>Agaram</span>{" "}
              Foundation
            </h1>
            <hr
              style={{
                width: "8%",
                marginLeft: "9%",
                color: "black",
                border: "1px solid black",
              }}
            />
            <p className="Agaram-Foundation-summary">
              India is on the cusp of change. The country is marching into the
              21st century, rightly proud of all its advancements in science and
              technology, its spectacular improvements in infrastructure and IT.
              And yet, we're weighed down by devastating inequalities, by a huge
              population that remains untouched by well- meaning acts like the
              Right to Education, and a large gender inequality. At Agaram, we
              want to make a difference in the lives of the millions who are not
              yet touched by education.
            </p>
          </div>
          <div className="Agaram-Foundation-video">
            <Link to={"/agaram-video"}>
              <img
                src="https://s1.agaram.in/img/webp-img/video-img.webp"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="vision">
          <h1>Vision</h1>
          <p>
            To bring about a significant positive change in the socio-economic
            status of the rural society by offering quality education to the
            deserving individual.
          </p>
        </div>
        <div className="founder-message">
          <div>
            <img
              src="https://s1.agaram.in/img/webp-img/founder_surya.webp"
              alt=""
            />
          </div>
          <div className="founder-message-text">
            <h1>
              <span style={{ color: "#ff5722" }}>Founders</span> Message
            </h1>
            <hr
              style={{
                width: "8%",
                marginLeft: "0%",
                color: "black",
                border: "1px solid black",
              }}
            />
            <h4>R.S. Suriya, Founder, Agaram Foundation.</h4>
            <div className="founder-message-paragraphs">
              <p>
                "I strongly believe that we can eliminate social evils and
                uplift the society only through education. Through Agaram, we
                reach out to deserving students from most backward parts of the
                country and provide them with opportunities to not only complete
                their education, but also transform into confident, competent
                and socially responsible individuals.
              </p>
              <p>
                "Education has got the power to make a human civilized and face
                the challenges of life. Education is an answer to the economic
                imbalance of an individual, religion and caste divide that
                prevails in the society and could be an important factor that
                blocks the above being transferred to the next generation."
              </p>
              <p>
                "I am confident that the beneficiaries of Agaram, whom we
                nurture today, will soon become the much needed catalysts to
                bring about the positive transformation in their families,
                communities and society at large."
              </p>
            </div>
          </div>
        </div>
        <div className="change-a-life">
          <div>
            <h1>
              <Link to={"#"} style={{ textDecoration: "none", color: "white" }}>
                Your Small Help will{" "}
                <span
                  style={{
                    color: "#ff5722",
                    fontFamily: "caveat,cursive",
                    // fontSize: "50px",
                    fontStyle: "italic",
                  }}
                >
                  #change
                </span>
                a
                <span
                  style={{
                    color: "#ff5722",
                    fontFamily: "caveat,cursive",
                    // fontSize: "50px",
                    fontStyle: "italic",
                  }}
                >
                  life
                </span>
              </Link>
            </h1>
          </div>
        </div>
        <div className="recent-social-updates">
          <h1>
            Recent
            <span
              style={{
                color: "#ff5722",
              }}
            >
              Social
            </span>
            Updates
            <hr
              style={{
                width: "8%",
                marginLeft: "9%",
                color: "black",
                border: "1px solid black",
              }}
            />
          </h1>
          <div className="social-updates">
            <div>
              <h3>FaceBook</h3>
            </div>
            <div>
              <h3>Tweets</h3>
            </div>
            <div>
              <h3>Instagram Feeds</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Page Div */}

      <div>
        <Footer />
      </div>
    </div>
  );
};
