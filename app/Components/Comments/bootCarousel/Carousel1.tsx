import React from "react";
import styles from "./css/carouselStyle.module.css";

const NewsCarousel = () => {
  const newsItems = [
    {
      title: "Breaking News 1",
      description: "This is the description for breaking news 1.",
      imgSrc: "/welcome1.jpeg",
    },
    {
      title: "Breaking News 2",
      description: "This is the description for breaking news 2.",
      imgSrc: "/welcome1.jpeg",
    },
    {
      title: "Breaking News 3",
      description: "This is the description for breaking news 3.",
      imgSrc: "/welcome1.jpeg",
    },
  ];

  return (
    <div
      id="newsCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${styles.carouselItem} ${
              index === 0 ? "active" : ""
            }`}
          >
            {/* Background Image */}
            <div
              className={`carousel-image ${styles.carouselImage}`}
              style={{
                backgroundImage: `url(${item.imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "250px",
              }}
            />
            {/* Text Below the Image */}
            <div
              className={`carousel-caption d-block text-center ${styles.carouselCaption}`}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#newsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#newsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default NewsCarousel;
