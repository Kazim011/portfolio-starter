import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import p1image from "../../img/p1image.png";
import p2image from "../../img/p2image.png";
import p3image from "../../img/p3image.png";
import p4image from "../../img/p4image.png";
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={p1image} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={p2image} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={p3image} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={p4image} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
