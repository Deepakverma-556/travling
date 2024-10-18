import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Trial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize animation duration
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Hello, AOS!</h1>
      <p data-aos="fade-right">AOS animations in a React app.</p>
    </div>
  );
};

export default Trial;
