"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    setShowBackToTop(window.scrollY > 200);
  };

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = classnames({
    scrolled: scrolled,
  });

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active" : "";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={scroll}>
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="email">
                <a href="#">
                  <i className="bi bi-envelope"> wordofguidance@gmail.com</i>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="social">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>{" "}
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>{" "}
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <h1>
              WORDOF<span>GUIDANCE</span>
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-header"
            aria-controls="main-header"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="main-header"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${isActive("/guidance")}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Guidance
                </a>
                <div className="dropdown-menu">
                  <Link href="/faith" className="dropdown-item">
                    Faith
                  </Link>
                  <Link href="/education" className="dropdown-item">
                    Education
                  </Link>
                  <Link href="/job" className="dropdown-item">
                    Job
                  </Link>
                  <Link href="/marriage" className="dropdown-item">
                    Marriage
                  </Link> <Link href="/christian-home" className="dropdown-item">
                    Christian Home
                  </Link> <Link href="/serving-god" className="dropdown-item">
                    Serving God
                  </Link> <Link href="/second-coming" className="dropdown-item">
                    Second Coming
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${isActive("/about")}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <div className="dropdown-menu">
                  <Link href="/about/bio" className="dropdown-item">
                    Bio
                  </Link>
                  <Link href="/about/articles" className="dropdown-item">
                    Articles
                  </Link>
                  <Link href="/about/messages" className="dropdown-item">
                    Messages
                  </Link>
                  <Link href="/about/events" className="dropdown-item">
                    Events
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${isActive("/contact")}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <div className="dropdown-menu">
                  <Link href="/contact/feedback" className="dropdown-item">
                    Feedback
                  </Link>
                  <Link href="/contact/counselling-and-prayers" className="dropdown-item">
                    Counselling and Prayers
                  </Link>
                  <Link href="/contact/career-guidance" className="dropdown-item">
                    Career Guidance
                  </Link>
                  <Link href="/contact/invite-me" className="dropdown-item">
                    Invite me to Speak
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showBackToTop && (
        <div className="backToTopButton" onClick={handleBackToTopClick}>
          <i className="bi bi-chevron-double-up"></i>
        </div>
      )}
    </header>
  );
};

export default Header;
