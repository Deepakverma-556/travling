import React, { useState } from "react";
import googleimg from "../assets/images/google-play.webp";
import appimg from "../assets/images/app-store.webp";
import hero from "../assets/images/hero-img.webp";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex items-center pt-10 max-md:pt-6 max-sm:pt-3 max-md:pb-5 max-sm:pb-12 flex-col bg-gradient-to-b from-[#E2F6FC] to-white bg-opacity-80">
      <div className="max-w-6xl mx-auto px-3 pb-5 w-full">
        <div className="w-full flex items-center justify-between">
          <a
            href="#"
            className="font-bold text-4xl leading-xl text-primary ff-roboto"
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
            className="md:hidden fixed right-3 text-black z-20 text-3xl font-bold"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`w-full h-full bg-primary transition-all duration-300 md:-top-full z-10 fixed flex justify-center items-center ${
          open
            ? "top-0 transition-all duration-300"
            : "-top-full transition-all duration-300"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-8">
          <li>
            <a
              href="#"
              className="ff-lato text-xl font-bold leading-6 text-white flex transition-all duration-200 hover:scale-105"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ff-lato text-xl font-bold leading-6 text-white text-nowrap flex transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ff-lato text-xl font-bold leading-6 text-white text-nowrap flex transition-all duration-200 hover:scale-105"
            >
              About Us
            </a>
          </li>
          <li>
            <button className="relative bg-orange text-nowrap ff-lato font-bold text-base leading-6 py-3 px-8 rounded-lg text-white transition-all overflow-hidden duration-200 before:top-0 before:left-0 before:bottom-0 before:right-0 before:m-auto before:w-0 before:bg-black before:h-0 before:absolute before:ease-out before:duration-300 hover:before:w-full hover:before:h-full ">
              <span className="relative z-10">Sign Up</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="container max-w-6xl mx-auto px-3 pt-5">
        <div className="flex flex-wrap -mx-3 items-center">
          <div className="w-full lg:w-1/2 px-3">
            <div>
              <h2 className="ff-poppins font-bold text-5xl leading-2xl text-darkgrey max-lg:leading-tight max-sm:leading-10 max-sm:text-4xl">
                Start your journey by one click, explore beautiful world!
              </h2>
              <p className="ff-poppins text-base leading-7 text-darkgrey text-opacity-80 pt-4 pb-8">
                Plan and book your perfect trip with expert advice, travel tips,
                destination information and inspiration from us!
              </p>
              <div className="flex items-center gap-6">
                <img
                  src={googleimg}
                  alt="google-play"
                  className="max-w-sm cursor-pointer"
                />
                <img
                  src={appimg}
                  alt="app-store"
                  className="max-w-sm w-full h-10 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 max-lg:pt-6">
            <div>
              <img src={hero} alt="hero-img" className="max-w-xl w-full mx-auto"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
