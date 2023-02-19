import Navbar from "./Companents/Navbar/Navbar";
import "./App.css";
import Intro from "./Companents/Intro/Intro";
import Services from "./Companents/Services/Services";
import Experience from "./Companents/Experience/Experience";
import Works from "./Companents/Works/Works";
import Portfolio from "./Companents/Portfolio/Portfolio";
import Testimonials from "./Companents/Testimonials/Testimonials";
import Contact from "./Companents/Contact/Contact";
import Footer from "./Companents/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
