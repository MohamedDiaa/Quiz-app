import { useState } from "react";
import "./Carousal.css"

function Carousal() {
  const [selected, SetSelected] = useState(0);

  const imgs = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1024px-All_Gizah_Pyramids.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Pyramid_%28Height_and_base%29_comparison.jpg/1920px-Pyramid_%28Height_and_base%29_comparison.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Mastaba-faraoun-3.jpg",
  ];

  const handlePrev = () => {
    let prev = selected - 1;
    if (prev >= 0) {
      SetSelected(prev);
    }
  };

  const handleNext = () => {
    let next = selected + 1;
    if (next < imgs.length) {
      SetSelected(next);
    }
  };
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {imgs.map((img, index) => {
          return (
            <div
              key={index}
              className={
                index === selected ? "carousel-item active" : "carousel-item"
              }
            >
              <img src={img} className="d-block w-100" alt="..." />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal;
