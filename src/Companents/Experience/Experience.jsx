import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          5+
        </div>
        <span>month</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          15+
        </div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          1+
        </div>
        <span>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
