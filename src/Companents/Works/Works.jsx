import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { link } from "react-scroll";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these{" "}
        </span>
        <span>Brands & Clients</span>
        <spane>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eaque
          ad vitae rem ipsum,
          <br />
          facere sint minima? Dolore, praesentium veritatis!
          <br />
          facere sint minima? Dolore, praesentium veritatis,praesentium
          veritatis!
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </spane>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"> </div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
