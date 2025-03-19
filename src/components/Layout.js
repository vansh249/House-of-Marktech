import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>
            Company<span>Logo</span>
          </h1>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#users">Users</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              Company<span>Logo</span>
            </h2>
            <p>Innovative solutions for modern businesses</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Our Services</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#docs">Documentation</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
