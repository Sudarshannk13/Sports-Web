import React from "react";
import heroImg from "../assets/Images/hero-img-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSquare } from "@fortawesome/free-solid-svg-icons";
import cardImg1 from "../../src/assets/Images/card-img-1.png";
import cardImg2 from "../../src/assets/Images/card-img-2.png";
import cardImg3 from "../../src/assets/Images/card-img-3.png";
import FixtureComp from "./otherComponents/FixtureComp";
import PhotoGallery from "./otherComponents/PhotoGallery";
// import News from "./otherComponents/News";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={heroImg} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 card card-bcg">
            <div className="card-body">
              <h3 className="card-title">
                Mumbai Premier League: MYJ-GMSC Stuns Protrack SI in Five-Goal
                Spectacle
              </h3>
              <div className="d-flex">
                <p className="card-text me-5">
                  <span className="pe-1">
                    <FontAwesomeIcon icon={faSquare} />
                  </span>
                  FIRST TEAM
                </p>
                <p className="card-text">
                  <span className="pe-1">
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: "#000000" }}
                    />
                  </span>
                  20 HRS AGO
                </p>
              </div>
            </div>
          </div>

          <div className="row my-5 justify-content-center">
            <div className="col-md-3">
              <div className="card">
                <img src={cardImg1} alt="..." />
                <div className="card-body bg-secondary rounded-bottom">
                  <p className="card-text">
                    MYJ GMSC unleashes a goal fest with a dominating 11-0 win
                    over JMJ SC in Mumbai Premier League
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={cardImg2} alt="..." />
                <div className="card-body bg-secondary rounded-bottom">
                  <p className="card-text">
                    Super sub Dipu Neupane strikes brace as 10 men MYJ-GMSC pick
                    come from behind win
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={cardImg3} alt="..." />
                <div className="card-body bg-secondary rounded-bottom">
                  <p className="card-text">
                    DK Pharma and GMSC-MYJ share spoils in Mumbai Premier League
                    Clash
                  </p>
                </div>
              </div>
            </div>
          </div>

          <FixtureComp />
        </div>
        {/* <News /> */}

        <PhotoGallery />
      </div>
    </>
  );
}

export default Home;
