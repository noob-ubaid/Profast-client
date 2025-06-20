import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/banner/banner1.png";
import img2 from "../../../assets/banner/banner2.png";
import img3 from "../../../assets/banner/banner3.png";
const Banner = () => {
  return (
    <Carousel className="mt-6 md:mt-6" autoPlay={true} showThumbs={false}>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default Banner;
