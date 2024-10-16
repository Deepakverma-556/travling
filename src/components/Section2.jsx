import React from "react";
import cardimg1 from "../assets/images/card-img-1.webp";
import cardimg2 from "../assets/images/card-img-2.webp";
import cardimg3 from "../assets/images/card-img-3.webp";
import cardimg4 from "../assets/images/card-img-4.webp";

const Section2 = () => {
  return (
    <section className="flex items-center py-24 max-lg:py-10 max-md:py-8 max-sm:py-0">
      <div className="max-w-6xl mx-auto px-3 w-full">
        <h2 className="ff-lato text-4xl leading-xl font-bold text-darkgrey max-sm:leading-10">
          Popular Destinations
        </h2>
        <p className="ff-lato text-base leading-6 text-darkgrey opacity-80 pt-2 pb-11 max-md:pb-9 max-sm:pb-6">
          Vacations to make your experience enjoyable in Indonesia!
        </p>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3">
            <div className="p-4 border flex flex-col border-white rounded-2xl bg-grey bg-opacity-45 transition-all duration-300 group/cards hover:scale-105">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={cardimg1}
                  alt="card-img-1"
                  className="flex transition-all duration-300 group-hover/cards:scale-110"
                />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.25 4.15888C0.25 1.85895 2.17194 0 4.49672 0C6.82806 0 8.75 1.85895 8.75 4.15888C8.75 5.31785 8.3285 6.39381 7.63475 7.30579C6.8694 8.31176 5.92608 9.18823 4.86427 9.87621C4.62126 10.0352 4.40194 10.0472 4.13522 9.87621C3.06737 9.18823 2.12404 8.31176 1.36525 7.30579C0.670992 6.39381 0.25 5.31785 0.25 4.15888ZM3.09711 4.28838C3.09711 5.05885 3.72583 5.66483 4.49672 5.66483C5.26812 5.66483 5.90289 5.05885 5.90289 4.28838C5.90289 3.5239 5.26812 2.88842 4.49672 2.88842C3.72583 2.88842 3.09711 3.5239 3.09711 4.28838Z"
                        fill="#42A8C3"
                      />
                    </svg>
                  </div>
                  <p className="ff-lato text-nowrap text-text-2xsm leading-4 text-lightgrey ">
                    Manggarai Barat
                  </p>
                </div>
                <p className="ff-lato font-bold text-base leading-6 text-darkgrey pt-2 pb-1">
                  Flores Road Trip 3D2N
                </p>
                <p className="ff-lato text-sm leading-5 text-gray-600">
                  3 Days
                </p>
                <p className="ff-lato font-bold text-sm leading-5 text-primary pt-4">
                  Rp 6.705.000{" "}
                  <span className="font-normal text-text-xsm leading-4 text-blue">
                    /orang
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 max-sm:pt-5">
            <div className="p-4 border flex flex-col border-white rounded-2xl bg-grey bg-opacity-45 transition-all duration-300 group/cards hover:scale-105">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={cardimg2}
                  alt="card-img-2"
                  className="flex transition-all duration-300 group-hover/cards:scale-110"
                />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.25 4.15888C0.25 1.85895 2.17194 0 4.49672 0C6.82806 0 8.75 1.85895 8.75 4.15888C8.75 5.31785 8.3285 6.39381 7.63475 7.30579C6.8694 8.31176 5.92608 9.18823 4.86427 9.87621C4.62126 10.0352 4.40194 10.0472 4.13522 9.87621C3.06737 9.18823 2.12404 8.31176 1.36525 7.30579C0.670992 6.39381 0.25 5.31785 0.25 4.15888ZM3.09711 4.28838C3.09711 5.05885 3.72583 5.66483 4.49672 5.66483C5.26812 5.66483 5.90289 5.05885 5.90289 4.28838C5.90289 3.5239 5.26812 2.88842 4.49672 2.88842C3.72583 2.88842 3.09711 3.5239 3.09711 4.28838Z"
                        fill="#42A8C3"
                      />
                    </svg>
                  </div>
                  <p className="ff-lato text-nowrap text-text-2xsm leading-4 text-lightgrey ">
                    Bogor
                  </p>
                </div>
                <p className="ff-lato font-bold text-base leading-6 text-darkgrey pt-2 pb-1">
                  Forrester Glamping Co Bogor
                </p>
                <p className="ff-lato text-sm leading-5 text-gray-600">
                  1 Days
                </p>
                <p className="ff-lato font-bold text-sm leading-5 text-primary pt-4">
                  Rp 1.205.000{" "}
                  <span className="font-normal text-text-xsm leading-4 text-blue">
                    /malam
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 max-md:pt-5">
            <div className="p-4 border flex flex-col border-white rounded-2xl bg-grey bg-opacity-45 transition-all duration-300 group/cards hover:scale-105">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={cardimg3}
                  alt="card-img-3"
                  className="flex transition-all duration-300 group-hover/cards:scale-110"
                />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.25 4.15888C0.25 1.85895 2.17194 0 4.49672 0C6.82806 0 8.75 1.85895 8.75 4.15888C8.75 5.31785 8.3285 6.39381 7.63475 7.30579C6.8694 8.31176 5.92608 9.18823 4.86427 9.87621C4.62126 10.0352 4.40194 10.0472 4.13522 9.87621C3.06737 9.18823 2.12404 8.31176 1.36525 7.30579C0.670992 6.39381 0.25 5.31785 0.25 4.15888ZM3.09711 4.28838C3.09711 5.05885 3.72583 5.66483 4.49672 5.66483C5.26812 5.66483 5.90289 5.05885 5.90289 4.28838C5.90289 3.5239 5.26812 2.88842 4.49672 2.88842C3.72583 2.88842 3.09711 3.5239 3.09711 4.28838Z"
                        fill="#42A8C3"
                      />
                    </svg>
                  </div>
                  <p className="ff-lato text-nowrap text-text-2xsm leading-4 text-lightgrey ">
                    Jakarta
                  </p>
                </div>
                <p className="ff-lato font-bold text-base leading-6 text-darkgrey pt-2 pb-1">
                  Paket Tiket pesawat Jakarta Bali
                </p>
                <p className="ff-lato font-bold text-sm leading-5 text-primary pt-4">
                  Rp 605.000{" "}
                  <span className="font-normal text-text-xsm leading-4 text-blue">
                    /person
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 max-lg:pt-5">
            <div className="p-4 border flex flex-col border-white rounded-2xl bg-grey bg-opacity-45 transition-all duration-300 group/cards hover:scale-105">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={cardimg4}
                  alt="card-img-4"
                  className="flex transition-all duration-300 group-hover/cards:scale-110"
                />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.25 4.15888C0.25 1.85895 2.17194 0 4.49672 0C6.82806 0 8.75 1.85895 8.75 4.15888C8.75 5.31785 8.3285 6.39381 7.63475 7.30579C6.8694 8.31176 5.92608 9.18823 4.86427 9.87621C4.62126 10.0352 4.40194 10.0472 4.13522 9.87621C3.06737 9.18823 2.12404 8.31176 1.36525 7.30579C0.670992 6.39381 0.25 5.31785 0.25 4.15888ZM3.09711 4.28838C3.09711 5.05885 3.72583 5.66483 4.49672 5.66483C5.26812 5.66483 5.90289 5.05885 5.90289 4.28838C5.90289 3.5239 5.26812 2.88842 4.49672 2.88842C3.72583 2.88842 3.09711 3.5239 3.09711 4.28838Z"
                        fill="#42A8C3"
                      />
                    </svg>
                  </div>
                  <p className="ff-lato text-nowrap text-text-2xsm leading-4 text-lightgrey ">
                    Kota Semarang
                  </p>
                </div>
                <p className="ff-lato font-bold text-base leading-6 text-darkgrey pt-2 pb-1">
                  Desa Wisata Kandri
                </p>
                <p className="ff-lato text-sm leading-5 text-gray-600">
                  14 Days
                </p>
                <p className="ff-lato font-bold text-sm leading-5 text-primary pt-4">
                  Rp 1.400.000{" "}
                  <span className="font-normal text-text-xsm leading-4 text-blue">
                    /person
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
