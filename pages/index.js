import React, { useState } from "react";
import Head from "next/head";
import "../styles.sass";
import ourStoryImage_1 from "../public/static/images/our-story.png";
import logo from "../public/static/images/français-logo.png";

function HomePage() {
  const [activated, setActivated] = useState(false);
  const handleClick = () => {
    setActivated(true);
    if (activated === true) {
      setActivated(false);
    }
  };

  /********************************************************************************************************************/

  return (
    <div className={activated === true ? "open" : ""}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <title>Français</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div className="container">
          <nav className="nav">
            <a
              onClick={handleClick}
              className={
                activated === true ? "menu-toggle open" : "menu-toggle"
              }
            >
              <i className="fas fa-bars"> </i>
              <i className="fas fa-times"> </i>
            </a>
            <a href="/" className="logo">
              <img src={logo} alt="" />
            </a>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Reservations
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <h2 className="sub-headline">
            <span className="first-letter">W</span>elcome
          </h2>
          <h1 className="headline">Le FRANÇAIS</h1>
          <div className="headline-description">
            <div className="separator">
              <div className="line line-left"> </div>
              <div className="asterisk">
                <i className="fas fa-asterisk"> </i>
              </div>
              <div className="line line-right"> </div>
            </div>
            <div className="single-animation">
              <h5>Ready to be opened.</h5>
              <a href="" className="btn cta-btn">
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="discover">
        <div className="container">
          <div className="restaurant-info">
            <div className="restaurant-description">
              <div className="restaurant-description padding-right animate-left">
                <div className="global-headline">
                  <h2 className="sub-headline">
                    <span className="first-letter">D</span>iscover
                  </h2>
                  <h1 className="headline headline-dark">Our Story</h1>
                  <div className="asterisk">
                    <i className="fas fa-asterisk"> </i>
                  </div>
                </div>
                <p>
                  video tutorial we will build a responsive website from start
                  to finish using HTML 5, CSS 3, and a little bit of Vanilla
                  JavaScript. We will also learn how to use keyframes and hover
                  effect animations
                </p>
                <a href="#" className="body-btn">
                  About Us
                </a>
              </div>
              <div className="restaurant-info-img">
                <img src={ourStoryImage_1} alt="beef" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tasteful-recipes between">
        <div className="container">
          <div className="global-headline">
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">D</span>iscover
              </h2>
            </div>
            <div className="animate-bottom">
              <h1 className="headline headline-dark">Our Story</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
