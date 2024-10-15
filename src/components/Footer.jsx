import React from "react";
import google from "../assets/images/google-play.webp";
import app from "../assets/images/app-store.webp";

export const Footer = () => {
  return (
    <footer className="flex items-center bg-primary pt-24 pb-12">
      <div className="container max-w-6xl px-3 mx-auto w-full">
        <div className="p-12 w-full flex flex-wrap justify-between items-center backdrop-filter backdrop-blur-3xl border border-white rounded-xl">
          <div className="">
            <p className="ff-lato text-xl leading-7 text-white">
              Prepare yourself to be a part of exploration of
            </p>
            <h2 className="ff-lato text-4xl leading-xl font-bold text-white">
              The Beauty of Indonesia
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <button className="bg-orange text-nowrap ff-lato font-bold text-base leading-6 py-3 px-16 rounded-lg text-white transition-all duration-200 hover:bg-darkorange">
              Sign In
            </button>
            <button className="bg-white text-nowrap ff-lato font-bold text-base leading-6 py-3 px-16 rounded-lg text-blue transition-all duration-200 hover:bg-darkorange hover:text-white">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full flex-wrap pt-24 pb-5">
          <div>
            <a
              href="#"
              className="font-bold text-4xl leading-xl text-white ff-roboto"
            >
              Travling!
            </a>
            <ul className="flex items-center gap-10 pt-3">
              <li>
                <a
                  href="#"
                  className="ff-lato text-sm leading-6 text-white flex transition-all duration-200 hover:scale-105"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff-lato text-sm leading-6 text-white text-nowrap flex transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff-lato text-sm leading-6 text-white text-nowrap flex transition-all duration-200 hover:scale-105"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff-lato text-sm leading-6 text-white text-nowrap flex transition-all duration-200 hover:scale-105"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="ff-lato font-bold text-xl leading-7 text-white pb-2">
              Get the App
            </p>
            <div className="flex items-center gap-3">
              <a href="#">
                <img src={google} alt="google-play" className="max-w-sm" />
              </a>
              <a href="#">
                <img src={app} alt="app-store" className="max-w-sm" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border border-white"></div>
        <div className="flex items-center justify-between flex-wrap pt-5">
          <p className="ff-lato text-base leading-6 text-white">
            © 2022 Travling.com
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/accounts/login/?hl=en" target="blank"
              className="w-7 h-7 rounded-full border border-white flex items-center justify-center group/link transition-all duration-200 hover:border-orange "
            >
              <svg
                className="transition-all duration-200 group-hover/link:fill-orange"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a
              href="https://twitter.com/?lang=en" target="blank"
              className="w-7 h-7 rounded-full border border-white flex items-center justify-center group/link transition-all duration-200 hover:border-orange "
            >
              <svg
                className="transition-all duration-200 group-hover/link:fill-orange"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/" target="blank"
              className="w-7 h-7 rounded-full border text-white font-bold text-xl border-white flex items-center justify-center transition-all duration-200 hover:text-orange hover:border-orange "
            >
              f
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};