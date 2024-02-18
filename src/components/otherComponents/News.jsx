import React from "react";
import NewsSlides from "./NewsSlides";
import image1 from "../../assets/Images/image1.png";
import image2 from "../../assets/Images/image2.png";
import image3 from "../../assets/Images/image3.png";
function News() {
  const cards = [
    {
      id: 1,
      image: image1,
      title: "Card Title 1",
      description: "Short description of card 1",
      readMoreLink: "https://example.com/read-more-1",
      category: "Category 1",
      date: "2023-10-26",
    },
    {
      id: 2,
      image: image2,
      title: "Card Title 1",
      description: "Short description of card 1",
      readMoreLink: "https://example.com/read-more-1",
      category: "Category 1",
      date: "2023-10-26",
    },
    // ... add other cards ...
    {
      id: 6,
      image: image3,
      title: "Card Title 6",
      description: "Short description of card 6",
      readMoreLink: "https://example.com/read-more-6",
      category: "Category 3",
      date: "2023-11-15",
    },
  ];
  return (
    <div>
      <NewsSlides cards={cards} itemsPerSlide={3} />
    </div>
  );
}

export default News;
