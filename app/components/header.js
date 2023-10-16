"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
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
              <li className={`nav-item ${isActive("/")}`}>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isActive("/guidance")}`}>
                <Link href="/about" className="nav-link">
                  Guidance
                </Link>
              </li>
              <li className={`nav-item ${isActive("/about")}`}>
                <Link href="/resume" className="nav-link">
                  About
                </Link>
              </li>
              <li className={`nav-item ${isActive("/contact")}`}>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
