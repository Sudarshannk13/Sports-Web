import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/Images/Final-logo.svg";
import scLogo from "../../assets/Images/Standard_Chartered.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`div-line ${isScrolled ? "scrolled" : ""}`} />
      <div
        className={`media-bar d-flex bg-light text-center justify-content-between align-items-center pt-2 ${
          isScrolled ? "d-none" : ""
        }`}
      >
        <div className="col-6 media-left">
          <p>Official website of Myj Football Club</p>
        </div>
        <div className="col-4 media-right d-flex justify-content-even align-items-center">
          <div class="col-3">
            <a href="#" className="me-2">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#000000" }}
              />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#000000" }}
              />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000" }} />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#000000" }} />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#000000" }}
              />
            </a>
          </div>
          <div class="col-4">
            <a>
              Contact Us{" "}
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#000000" }} />{" "}
            </a>
          </div>
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbg text-center ${isScrolled ? "scrolled" : ""}`}
        variant={isScrolled ? "dark" : "light"} // Change variant based on scroll
        fixed={isScrolled ? "top" : ""}
      >
        <Container>
          <Navbar.Brand
            href="#"
            className={`align-self-start ${isScrolled ? "scrolled" : ""}`}
          >
            <img
              src={Logo}
              alt="MyJ FC Logo"
              height={isScrolled ? "55px" : "77px"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0">
              {[
                { label: "HOME", href: "#" },
                { label: "CLUB", href: "#" },
                { label: "TEAMS", href: "#" },
                { label: "FIXTURE", href: "#" },
                { label: "STANDINGS", href: "#" },
                { label: "MEDIA", href: "#" },
                { label: "ACADEMY", href: "#" },
              ].map(({ label, href, disabled }) => (
                <React.Fragment key={label}>
                  <Nav.Link
                    className={`nav-link${disabled ? " disabled" : ""}`}
                    href={href}
                  >
                    {label}
                  </Nav.Link>
                  {/* Add a divider */}
                  {label !== "ACADEMY" && <div className="divider"></div>}
                </React.Fragment>
              ))}
            </Nav>
            {isScrolled && (
              <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} style={{ color: "#FFFFFF" }} />
              </div>
            )}
            {!isScrolled && <img src={scLogo} alt="" className="img-fluid" />}
            {isScrolled && (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  label="search"
                />
              </form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
