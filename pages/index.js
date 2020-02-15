import React, { useState } from "react";
import Head from "next/head";
import "../styles.sass";
import logo from "../public/static/images/français-logo.png";

//IMAGES
import ourStoryImage_1 from "../public/static/images/our-story.png";
import menuImage_1 from "../public/static/images/menu-group.jpg";
import menuImage_2 from "../public/static/images/menu-group2.jpg";
import menuImage_3 from "../public/static/images/menu-group3.jpg";
import menuImage_4 from "../public/static/images/menu-group4.jpg";
import delightImage_1 from "../public/static/images/delight-group.jpg";
import delightImage_2 from "../public/static/images/delight-group-2.jpg";

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
      {/* NAVIGATION SECTION */}
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
      {/* HERO SECTION */}
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
      {/* DISCOVER SECTION */}
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
      {/* RECIPE SECTION */}
      <section className="delicious-recipes between">
        <div className="container">
          <div className="global-headline">
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">D</span>elicious
              </h2>
            </div>
            <div className="animate-bottom">
              <h1 className="headline headline-dark">Recipes</h1>
            </div>
          </div>
        </div>
      </section>
      {/* MENU SECTION */}
      <section className="discover-menu">
        <div className="container">
          <div className="restaurant-info">
            <div className="image-group padding-right animate-left">
              <img src={menuImage_1} alt="" />

              <img src={menuImage_2} alt="" />

              <img src={menuImage_3} alt="" />

              <img src={menuImage_4} alt="" />
            </div>
            <div className="restaurant-description animate-right">
              <div className="global-headline">
                <h2 className="sub-headline">
                  <span className="first-letter">D</span>iscover
                </h2>
                <h1 className="headline headline-dark">Menu</h1>
                <div className="asterisk">
                  <i className="fas fa-asterisk"> </i>
                </div>
              </div>
              <p>
                We will also learn how to use keyframes and hover effect
                animations as well as a new tool to animate on scroll called
                Scroll Reveal. Finally we will use media queries to make this
                web design responsive! The Rosa is a premium WordPress theme you
                can purchase. Links below.
              </p>
              <a href="#" className="btn body-btn">
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* BLEND SECTION */}
      <section className="perfect-blend between">
        <div className="container">
          <div className="global-headline">
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">T</span>he perfect
              </h2>
            </div>
            <div className="animate-bottom">
              <h1 className="headline headline-dark">Blend</h1>
            </div>
          </div>
        </div>
      </section>
      {/* CULINARY SECTION */}
      <section className="culinary-delight">
        <div className="container">
          <div className="restaurant-info">
            <div className="restaurant-description animate-right">
              <div className="global-headline">
                <h2 className="sub-headline">
                  <span className="first-letter">C</span>ulinary
                </h2>
                <h1 className="headline headline-dark">Delights</h1>
                <div className="asterisk">
                  <i className="fas fa-asterisk"> </i>
                </div>
              </div>
              <p>
                We will also learn how to use keyframes and hover effect
                animations as well as a new tool to animate on scroll called
                Scroll Reveal. Finally we will use media queries to make this
                web design responsive! The Rosa is a premium WordPress theme you
                can purchase. Links below.
              </p>
              <a href="#" className="btn body-btn">
                Make A Reservation
              </a>
            </div>
            <div className="image-group">
              <img className="animate-top" src={delightImage_1} />
              <img className="animate-top" src={delightImage_2} />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <div className="container">
          <div className="back-to-top">
            <a href="#hero">
              <i className="fas fa-chevron-up"></i>
            </a>
          </div>
          <div className="footer-content">
            <div className="footer-content-animate animate-up">
              <h4>About Français</h4>
              <div className="asterisk">
                <i className="fas fa-asterisk"> </i>
              </div>
              <p>
                We will also learn how to use keyframes and hover effect
                animations as well as a new tool to animate on scroll called
                Scroll Reveal. Finally we will use media queries to make this
                web design responsive! The Rosa is a premium WordPress theme you
                can purchase. Links below.
              </p>
            </div>
            <div className="footer-content-divider animate-bottom">
              <div className="social-menu">
                <h4 className="follow-us">Follow Us</h4>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-tripadvisor"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="newsletter-container">
                <h4>Newsletter</h4>
                <form action="" className="newsletter-form">
                  <input
                    type="text"
                    className="newletter-input"
                    placeholder="Enter Your Email"
                  />
                  <button className="newsetter-btn" type="submit"><i className="fas fa envelope"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
