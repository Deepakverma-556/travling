import React from "react";
import google from "../assets/images/google-play.webp";
import app from "../assets/images/app-store.webp";

export const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  
  return (
    <footer className="flex items-center bg-primary pt-24 max-md:pt-16 max-sm:pt-12 pb-12 max-lg:pb-8 max-md:pb-6 rounded-t-3xl overflow-hidden">
      <div className="container max-w-6xl px-3 mx-auto w-full">
        <div className="p-12 max-lg:p-10 max-md:p-8 max-sm:p-6 w-full flex flex-wrap justify-between items-center filter bg-[#60b6cf] backdrop-blur-sm border border-white rounded-xl">
          <div className="max-md:w-full max-md:text-center">
            <p className="ff-lato text-xl max-sm:text-base max-sm:leading-5 leading-7 text-white">
              Prepare yourself to be a part of exploration of
            </p>
            <h2 className="ff-lato text-4xl max-md:text-3xl max-sm:text-[22px] leading-xl max-sm:leading-9 font-bold text-white">
              The Beauty of Indonesia
            </h2>
          </div>
          <div className="flex max-[500px]:flex-col md:flex-col gap-3 max-md:w-full max-md:pt-4 max-md:flex max-md:justify-center">
            <button className="relative overflow-hidden py-3 px-16 border text-nowrap rounded-lg bg-white border-white text-black transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:bg-black before:duration-300 before:ease-out hover:text-white hover:border-black hover:before:h-full hover:before:w-full">
              <span className="relative z-10 text-nowrap ff-lato font-semibold text-base leading-6">
                Sign In
              </span>
            </button>
            <button className="relative overflow-hidden py-3 px-16 border text-nowrap rounded-lg border-white text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:bg-black before:duration-300 before:ease-out hover:text-white hover:border-black hover:before:h-full hover:before:w-full">
              <span className="relative z-10 text-nowrap ff-lato font-semibold text-base leading-6">
                Sign Up
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full flex-wrap pt-24 max-lg:pt-16 max-md:pt-10 max-sm:pt-6 pb-5">
          <div className="max-md:w-full max-md:text-center">
            <a
              href="#"
              className="font-bold text-4xl max-md:text-3xl max-sm:text-2xl leading-xl text-white ff-roboto"
            >
              Travling!
            </a>
            <ul className="flex items-center gap-10 max-md:gap-6 max-sm:gap-3 pt-3 max-md:pt-0 max-md:justify-center">
              <li>
                <a
                  href="#"
                  onClick={handleClick}
                  className="ff-lato text-sm leading-6 text-white flex relative group"
                >
                  Product
                  <div className="bg-white h-[0.5px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleClick}
                  className="ff-lato text-sm leading-6 text-white text-nowrap flex relative group"
                >
                  Contact Us
                  <div className="bg-white h-[0.5px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleClick}
                  className="ff-lato text-sm leading-6 text-white text-nowrap flex relative group"
                >
                  Privacy Policy
                  <div className="bg-white h-[0.5px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleClick}
                  className="ff-lato text-sm leading-6 text-white text-nowrap flex relative group"
                >
                  About Us
                  <div className="bg-white h-[0.5px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
            </ul>
          </div>
          <div className="max-md:w-full max-md:text-center max-md:pt-4 max-sm:pt-2">
            <p className="ff-lato font-bold text-xl leading-7 text-white pb-4 max-md:pb-3 max-sm:pb-2">
              Get the App
            </p>
            <div className="flex items-center gap-3 max-md:justify-center">
              <a href="#">
                <img src={google} alt="google-play" className="max-w-sm" />
              </a>
              <a href="#" className="w-full max-w-sm">
                <img
                  src={app}
                  alt="app-store"
                  className="max-w-sm w-full h-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] border-white"></div>
        <div className="flex items-center justify-between flex-wrap pt-5">
          <p className="ff-lato text-base leading-6 text-white">
            © 2024 Travling.com
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/accounts/login/?hl=en"
              target="blank"
              className="w-7 h-7 rounded-full border border-white flex items-center justify-center transition-all duration-200 hover:scale-110 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a
              href="https://twitter.com/?lang=en"
              target="blank"
              className="w-7 h-7 rounded-full border border-white flex items-center justify-center transition-all duration-200 hover:scale-110 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  className="transition-all duration-200 group-hover/link:fill-orange"
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="w-7 h-7 rounded-full border text-white font-bold text-xl border-white flex items-center justify-center transition-all duration-200 hover:scale-110 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g fill="#fffcfc">
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M29,3c-5.523,0 -10,4.477 -10,10v5h-6v8h6v19h8v-19h7l1,-8h-8v-4c0,-2.209 1.791,-4 4,-4h4v-6.678c-1.909,-0.197 -4.079,-0.326 -6,-0.322z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
