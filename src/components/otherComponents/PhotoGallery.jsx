import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "./Card";
import image1 from "../../assets/Images/image1.png";
import image2 from "../../assets/Images/image2.png";
import image3 from "../../assets/Images/image3.png";

function PhotoGallery() {
  const cardsData = [
    {
      image: image1,
      title: "Card title 1",
      text: "Card description 1",
    },
    {
      image: image2,
      title: "Card title 1",
      text: "Card description 1",
    },
    {
      image: image3,
      title: "Card title 1",
      text: "Card description 1",
    },
  ];
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-around p-2">
          <div className="col-md-6 text-start">PHOTO GALLERY</div>
          <div className="col-md-6 text-end">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                FILTER
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row">
          <div className="card-container">
            <div className="row">
              {cardsData.map((card, index) => (
                <div className="col-md-4" key={index}>
                  <Card
                    image={card.image}
                    title={card.title}
                    text={card.text}
                  />
                  <div class="text-center mt-3">
                    <button type="button" class="btn btn-primary">
                      View All
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
