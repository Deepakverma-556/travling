import React, { useState, useEffect } from "react";
import googleimg from "../assets/images/google-play.webp";
import appimg from "../assets/images/app-store.webp";
import hero from "../assets/images/hero-img.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

    const [open, setOpen] = useState(false);
    useEffect(() => {
      const handleOverflow = () => {
        if (open && window.innerWidth < 1024) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      };
      handleOverflow();
      window.addEventListener("resize", handleOverflow);
      return () => {
        window.removeEventListener("resize", handleOverflow);
      };
    }, [open]);
    return (
      <section className="flex items-center pt-10 max-md:pt-6 max-sm:pt-3 pb-24 max-lg:pb-20 max-md:pb-16 max-sm:pb-12 flex-col bg-gradient-to-b from-[#E2F6FC] to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pb-5 w-full">
          <div  className="w-full flex items-center justify-between"
          >
            <a
              href="#"
              className="font-bold text-4xl max-md:text-3xl max-sm:text-2xl leading-xl text-primary ff-roboto"
            >
              Travling!
            </a>
            <ul className="flex items-center gap-20 max-md:gap-14 max-sm:gap-8 max-md:hidden">
              <li>
                <a
                  href="#"
                  className="ff-lato text-base relative group leading-6 text-darkgrey flex"
                >
                  Product
                  <div className="bg-darkgrey h-[0.5px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff-lato text-base relative group leading-6 text-darkgrey text-nowrap flex"
                >
                  Contact Us
                  <div className="bg-darkgrey h-[0.5px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff-lato text-base relative group leading-6 text-darkgrey text-nowrap flex"
                >
                  About Us
                  <div className="bg-darkgrey h-[0.5px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
            </ul>
            <button className="relative bg-orange max-md:hidden text-nowrap ff-lato font-bold text-base leading-6 py-3 px-8 rounded-lg text-white transition-all overflow-hidden duration-200 before:top-0 before:left-0 before:bottom-0 before:right-0 before:m-auto before:w-0 before:bg-black before:h-0 before:absolute before:ease-out before:duration-300 hover:before:w-full hover:before:h-full ">
              <span className="relative z-10">Sign Up</span>
            </button>
            <div
              className="md:hidden text-black z-20 text-4xl max-sm:text-3xl font-bold"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </div>
          </div>
        </div>
        <div
          className={`w-full h-full bg-primary transition-all duration-500 md:-top-full z-10 fixed flex justify-center items-center ${
            open ? "top-0" : "-top-full"
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-8">
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#"
                className="ff-lato text-xl font-bold leading-6 text-white flex transition-all duration-200 hover:scale-105"
              >
                Product
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#"
                className="ff-lato text-xl font-bold leading-6 text-white text-nowrap flex transition-all duration-200 hover:scale-105"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#"
                className="ff-lato text-xl font-bold leading-6 text-white text-nowrap flex transition-all duration-200 hover:scale-105"
              >
                About Us
              </a>
            </li>
            <li>
              <button
                onClick={() => setOpen(false)}
                className="relative bg-orange text-nowrap ff-lato font-bold text-base leading-6 py-3 px-8 rounded-lg text-white transition-all overflow-hidden duration-200 before:top-0 before:left-0 before:bottom-0 before:right-0 before:m-auto before:w-0 before:bg-black before:h-0 before:absolute before:ease-out before:duration-300 hover:before:w-full hover:before:h-full "
              >
                <span className="relative z-10">Sign Up</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="container max-w-6xl mx-auto px-4 pt-5 max-md:pt-3 max-sm:pt-1">
          <div className="flex flex-wrap -mx-3 items-center">
            <div className="w-full lg:w-1/2 px-3">
              <div>
                <h2
                  data-aos="fade-right"
                  className="ff-poppins font-bold text-5xl leading-2xl text-darkgrey max-lg:leading-tight max-sm:leading-10 max-md:text-4xl max-sm:text-3xl "
                >
                  Start your journey by one click, explore beautiful world!
                </h2>
                <p
                  data-aos="fade-right" data-aos-delay="200"
                  className="ff-poppins text-base leading-7 text-darkgrey text-opacity-80 pt-4 pb-8 max-md:pt-3 max-sm:pt-2 max-md:pb-7 max-sm:pb-6"
                >
                  Plan and book your perfect trip with expert advice, travel
                  tips, destination information and inspiration from us!
                </p>
                <div
                  data-aos="fade-right" data-aos-delay="300"
                  className="flex items-center gap-6 max-w-max"
                >
                  <a
                    target="blank"
                    href="https://play.google.com/store/games?hl=en"
                  >
                    <img
                      src={googleimg}
                      alt="google-play"
                      className="max-w-sm"
                    />
                  </a>
                  <a
                    target="blank"
                    href="https://www.apple.com/in/app-store/"
                    className="max-w-sm w-full"
                  >
                    <img
                      src={appimg}
                      alt="app-store"
                      className="max-w-sm w-full h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3 max-lg:pt-6">
              <div data-aos="fade-left" >
                <img
                  src={hero}
                  alt="hero-img"
                  className="max-w-xl w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
export default Header;
