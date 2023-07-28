import React, { useRef, useEffect, useState } from "react";
import "../customStyles/HomeCarousel2.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";

const HomeCarousel2 = () => {
  const carouselRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  useEffect(() => {
    const carouselNode = carouselRef.current;
    const checkButtonsVisibility = () => {
      if (carouselNode) {
        const scrollLeft = carouselNode.scrollLeft;
        const maxScroll = carouselNode.scrollWidth - carouselNode.clientWidth;
        setShowPrev(scrollLeft > 0);
        setShowNext(scrollLeft < maxScroll);
      }
    };

    checkButtonsVisibility();
    // Add a scroll event listener to check for button visibility
    carouselNode.addEventListener("scroll", checkButtonsVisibility);
    // Remove the event listener when the component unmounts
    return () => {
      carouselNode.removeEventListener("scroll", checkButtonsVisibility);
    };
  }, []);

  const prevSlide = () => {
    if (showPrev) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  const nextSlide = () => {
    if (showNext) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  const images = [
    [image1, image2, image3, image4],
    [image5, image6, image7, image8],
    [image3, image5, image7, image1],
    // Add more image sets here
  ];

  return (
    <div className="carousel-container px-2 pb-4 bg-black">
      <div className="carousel" ref={carouselRef}>
        {images.map((imageSet, index) => (
          <div key={index} className="carousel-slide">
            {imageSet.map((image, idx) => (
              <div key={idx} className="carousel-image-container">
                <img src={image} alt="" className="h-full" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        className={`carousel-btn prev ${!showPrev ? "hidden" : ""}`}
        onClick={prevSlide}
        disabled={!showPrev}
      >
        &lt;
      </button>
      <button
        className={`carousel-btn next ${!showNext ? "hidden" : ""}`}
        onClick={nextSlide}
        disabled={!showNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default HomeCarousel2;
