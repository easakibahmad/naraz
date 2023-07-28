import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import Card1 from "./Card1";

const HomeCarousel1 = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    glideRef.current = new Glide(".glide", {
      type: "carousel",
      autoplay: 3000,
      animationDuration: 500,
      perView: 1,
      focusAt: "center",
      breakpoints: {
        800: {
          perView: 1,
        },
        480: {
          perView: 1,
        },
      },
    });

    glideRef.current.mount();

    return () => {
      glideRef.current.destroy();
    };
  }, []);

  const images = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
    },
    {
      id: 5,
      src: image5,
      alt: "Image 5",
    },
    {
      id: 6,
      src: image6,
      alt: "Image 6",
    },
    {
      id: 7,
      src: image7,
      alt: "Image 7",
    },
    {
      id: 8,
      src: image8,
      alt: "Image 8",
    },
  ];

  return (
    <div className="relative bg-black">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {images.map((image) => (
              <li key={image.id} className="glide__slide">
                <div className="grid grid-cols-6 gap-4">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full col-span-4 h-screen pb-10 pt-4 pl-2"
                  />
                  <div className="grid col-span-2 grid-cols-1 pb-10 pt-4 pr-2">
                    <Card1></Card1>
                    <Card1></Card1>
                    <Card1></Card1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="absolute bottom-16 left-4 text-yellow-400 font-extrabold z-10 text-6xl"
        onClick={() => glideRef.current.go("<")}
      >
        &lt;
      </button>
      <button
        className="absolute bottom-16 left-20 z-10 text-yellow-400 font-extrabold text-6xl"
        onClick={() => glideRef.current.go(">")}
      >
        &gt;
      </button>
    </div>
  );
};

export default HomeCarousel1;
