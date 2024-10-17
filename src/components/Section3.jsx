import React from "react";
import hero from "../assets/images/sec-3-hero.webp";

const Section3 = () => {
  return (
    <section className="flex items-center py-24 max-lg:py-20 max-md:py-16 max-sm:py-12 overflow-hidden">
      <div className="container px-3 max-w-6xl mx-auto w-full">
        <div className="flex flex-wrap -mx-3 items-center">
          <div className="w-full lg:w-1/2 px-3">
            <div>
              <img
                src={hero}
                alt="hero-img"
                className="max-w-xl w-full mx-auto"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <div>
              <h2 className="ff-lato text-4xl max-md:text-3xl max-sm:text-2xl leading-xl font-bold text-darkgrey">
                Why Choose Us
              </h2>
              <p className="ff-lato text-xl max-md:text-lg max-sm:text-base leading-7 text-gray-900 pt-2 pb-10 max-md:pb-6 max-sm:pb-2">
                Enjoy different experiences in every place you visit and
                discover new and affordable adventures of course.
              </p>
              <div className="flex items-center gap-7 px-6 max-sm:px-3 py-4 rounded-xl transition-all duration-200 hover:shadow-[0px_16px_24px_0px] hover:shadow-[#6061701F]">
                <div>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.94149 25.3859L1.98713 21.489C1.71649 21.2855 1.62788 20.9261 1.79032 20.6909C2.58439 19.5409 4.11408 19.1481 5.61707 19.7083L10.0978 22.25L6.94149 25.3859Z"
                      fill="#42A8C3"
                    />
                    <path
                      d="M8.60413 27.0485L12.5112 32.0131C12.7148 32.2837 13.0742 32.3723 13.3094 32.2099L13.6048 32.0059C14.5775 31.3343 14.9097 30.0404 14.4358 28.7691L11.7502 23.9023L8.60413 27.0485Z"
                      fill="#42A8C3"
                    />
                    <path
                      d="M7.23049 20.6233L4.42737 23.4083L6.94143 25.3858L10.0978 22.2498L7.23049 20.6233Z"
                      fill="#219FC0"
                    />
                    <path
                      d="M8.28357 10.1235C7.66137 9.50129 7.61215 8.50988 8.16801 7.82779C8.96307 6.85214 9.95916 5.76575 10.5567 5.16822C11.3741 4.35077 11.4456 4.44843 12.3189 3.91308C12.4475 3.83424 12.6135 3.85325 12.7201 3.95989L14.4472 5.68704C14.5539 5.79368 14.5728 5.95963 14.4941 6.08821C13.9587 6.96158 14.0564 7.03293 13.2389 7.85038C12.6414 8.4479 11.555 9.444 10.5793 10.239C9.89718 10.7948 8.90571 10.7457 8.28357 10.1235Z"
                      fill="#FFBFAB"
                    />
                    <path
                      d="M23.8762 25.7162C23.254 25.094 23.2048 24.1026 23.7607 23.4205C24.5557 22.4449 25.5518 21.3585 26.1493 20.761C26.9668 19.9435 27.0381 20.0412 27.9116 19.5058C28.0402 19.427 28.2061 19.446 28.3127 19.5526L30.0399 21.2798C30.1465 21.3864 30.1655 21.5524 30.0867 21.681C29.5513 22.5543 29.649 22.6257 28.8316 23.4432C28.234 24.0407 27.1476 25.0368 26.172 25.8319C25.4898 26.3877 24.4984 26.3384 23.8762 25.7162Z"
                      fill="#FFBFAB"
                    />
                    <path
                      d="M16.0835 16.013L22.1959 9.9006L3.26093 3.95138C2.87102 3.85184 2.48339 3.94663 2.22544 4.20457L0.625705 5.80431C0.0899632 6.34005 0.319911 7.32215 1.07623 7.72827L16.0835 16.013Z"
                      fill="#42A8C3"
                    />
                    <path
                      d="M17.9176 8.55646L12.4608 14.0132L16.0835 16.0131L22.196 9.90066L17.9176 8.55646Z"
                      fill="#219FC0"
                    />
                    <path
                      d="M17.9868 17.9165L24.0992 11.8041L30.0485 30.7391C30.148 31.129 30.0532 31.5166 29.7953 31.7746L28.1955 33.3743C27.6598 33.9101 26.6777 33.6801 26.2716 32.9238L17.9868 17.9165Z"
                      fill="#42A8C3"
                    />
                    <path
                      d="M29.5241 9.23455L19.2553 19.5032C17.5323 21.2263 15.7004 22.8334 13.7826 24.3047L8.89692 28.0526C7.76587 28.9203 6.42068 29.0252 5.6977 28.3023C4.97472 27.5793 5.07967 26.2341 5.94738 25.103L9.69529 20.2174C11.1665 18.2995 12.7736 16.4678 14.4967 14.7446L24.7655 4.47595C26.1693 3.07218 27.7815 1.90258 29.4847 1.09959C30.9514 0.408116 32.5105 -0.0250872 33.2678 0.732204C34.0251 1.4895 33.5919 3.04855 32.9004 4.51528C32.0975 6.2186 30.9279 7.83077 29.5241 9.23455Z"
                      fill="#E0F3FC"
                    />
                    <path
                      d="M33.2677 0.732292C33.0012 0.465755 32.6351 0.347135 32.2088 0.334961C32.2395 1.12363 31.8975 2.12389 31.4446 3.08457C30.6416 4.78776 29.472 6.4 28.0682 7.80377L17.7995 18.0725C16.0765 19.7955 14.2446 21.4027 12.3268 22.8738L7.44114 26.6217C6.72174 27.1736 5.91588 27.4164 5.2384 27.3344C5.28931 27.7103 5.44107 28.0456 5.69771 28.3022C6.42069 29.0252 7.76588 28.9202 8.89693 28.0525L13.7826 24.3046C15.7004 22.8334 17.5322 21.2263 19.2553 19.5032L29.5241 9.23457C30.9278 7.83079 32.0974 6.21855 32.9004 4.51536C33.5918 3.04863 34.025 1.48958 33.2677 0.732292Z"
                      fill="#C3D3DB"
                    />
                    <path
                      d="M30.3749 7.26809L30.0243 7.61875C29.6986 7.9444 26.0558 4.30156 26.3814 3.97591L26.7321 3.62526C26.9531 3.40423 27.2775 3.33457 27.5417 3.45143C28.858 4.03372 29.9664 5.14218 30.5488 6.45852C30.6655 6.72265 30.5959 7.04707 30.3749 7.26809Z"
                      fill="#51C4F5"
                    />
                    <path
                      d="M6.80711 27.681C6.68218 27.681 6.55718 27.6334 6.46187 27.538C6.27118 27.3473 6.27118 27.0381 6.46187 26.8475L10.7259 22.5834C10.9166 22.3927 11.2258 22.3927 11.4164 22.5834C11.6071 22.7741 11.6071 23.0833 11.4164 23.2739L7.15236 27.538C7.05705 27.6333 6.93211 27.681 6.80711 27.681Z"
                      fill="#42A8C3"
                      fillOpacity="0.92"
                    />
                  </svg>
                </div>
                <div>
                  <p className="ff-lato font-bold text-xl leading-7 text-gray-900">
                    Flight Ticket
                  </p>
                  <p className="ff-lato text-base leading-6 text-gray-600">
                    Vitae donec pellentesque a aliquam et ultricies auctor.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-7 px-6 max-sm:px-3 py-4 rounded-xl transition-all duration-200 hover:shadow-[0px_16px_24px_0px] hover:shadow-[#6061701F] max-sm:my-3 my-6">
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_12_4971)">
                      <path d="M8.83336 13H0V40H8.83336V13Z" fill="#E8EAEA" />
                      <path d="M40 13H31.1666V40H40V13Z" fill="#E8EAEA" />
                      <path
                        d="M0 13.5H40C40 12.5 39.1666 11.6666 38.1666 11.6666H1.83336C0.833359 11.6666 0 12.5 0 13.5Z"
                        fill="#FFA679"
                      />
                      <path
                        d="M31.1667 8.49986H8.83337V39.9999H31.1667V8.49986Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M32.4167 6.66666H7.58339C7.08339 6.66666 6.66675 7.0833 6.66675 7.5833C6.66675 8.0833 7.08339 8.50001 7.58339 8.50001H32.4167C32.9167 8.50001 33.3334 8.08337 33.3334 7.58337C33.3334 7.08338 32.9167 6.66666 32.4167 6.66666Z"
                        fill="#FFA679"
                      />
                      <path
                        d="M6.33336 15.5H2.5V19.75H6.33336V15.5Z"
                        fill="#42A8C3"
                      />
                      <path
                        d="M6.33336 21.4168H2.5V25.6668H6.33336V21.4168Z"
                        fill="#42A8C3"
                      />
                      <path
                        d="M6.33336 27.3333H2.5V31.5833H6.33336V27.3333Z"
                        fill="#42A8C3"
                      />
                      <path
                        d="M6.33336 33.2499H2.5V37.4999H6.33336V33.2499Z"
                        fill="#42A8C3"
                      />
                      <path
                        d="M37.5 15.5H33.6666V19.75H37.5V15.5Z"
                        fill="#42A8C3"
                      />
                      <path
                        d="M37.5 21.4168H33.6666V25.6668H37.5V21.4168Z"
                        fill="#42A8C3"
                      />
                      <path
                        d="M37.5 27.3333H33.6666V31.5833H37.5V27.3333Z"
                        fill="#42A8C3"
                      />
                      <path
                        d="M37.5 33.2499H33.6666V37.4999H37.5V33.2499Z"
                        fill="#42A8C3"
                      />
                      <path
                        d="M15.5 22.9167H11.3334V27.1667H15.5V22.9167Z"
                        fill="#8ECBDB"
                      />
                      <path
                        d="M24.4166 29.5833H15.5V40H24.4166V29.5833Z"
                        fill="#056D8A"
                      />
                      <path d="M40 38.25H0V40H40V38.25Z" fill="#ACB3BA" />
                      <path
                        d="M15.5 11.0833H11.3334V15.3333H15.5V11.0833Z"
                        fill="#8ECBDB"
                      />
                      <path
                        d="M15.5 17.0001H11.3334V21.2501H15.5V17.0001Z"
                        fill="#8ECBDB"
                      />
                      <path
                        d="M22.0833 11.0833H17.9166V15.3333H22.0833V11.0833Z"
                        fill="#8ECBDB"
                      />
                      <path
                        d="M22.0833 17.0001H17.9166V21.2501H22.0833V17.0001Z"
                        fill="#8ECBDB"
                      />
                      <path
                        d="M22.0833 22.9167H17.9166V27.1667H22.0833V22.9167Z"
                        fill="#8ECBDB"
                      />
                      <path
                        d="M28.6668 11.0833H24.5001V15.3333H28.6668V11.0833Z"
                        fill="#8ECBDB"
                      />
                      <path
                        d="M28.6668 17.0001H24.5001V21.2501H28.6668V17.0001Z"
                        fill="#8ECBDB"
                      />
                      <path
                        d="M28.6668 22.9167H24.5001V27.1667H28.6668V22.9167Z"
                        fill="#8ECBDB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_4971">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="ff-lato font-bold text-xl leading-7 text-gray-900">
                    Accomodation
                  </p>
                  <p className="ff-lato text-base leading-6 text-gray-600">
                    Vitae donec pellentesque a aliquam et ultricies auctor.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-7 px-6 max-sm:px-3 py-4 rounded-xl transition-all duration-200 hover:shadow-[0px_16px_24px_0px] hover:shadow-[#6061701F]">
                <div>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1875 0H6.1875C5.60531 0 5.13281 0.4725 5.13281 1.05469V6.70289C5.13281 7.28578 5.60531 7.75758 6.1875 7.75758H15.1875C15.7697 7.75758 16.2422 7.28578 16.2422 6.70289V1.05469C16.2422 0.4725 15.7697 0 15.1875 0ZM14.1328 5.6482L10.6588 7.26539L7.24219 5.6482V2.10938H14.1328V5.6482Z"
                      fill="#525C74"
                    />
                    <path
                      d="M16.2422 1.05469V6.70289C16.2422 7.28578 15.7697 7.75758 15.1875 7.75758H10.6587V7.3357L14.1328 5.6482V2.10938H10.6587V0H15.1875C15.7697 0 16.2422 0.4725 16.2422 1.05469Z"
                      fill="#444E66"
                    />
                    <path
                      d="M20.3203 9.5625L19.8984 32.4141C19.8984 34.4377 18.6173 34.6641 16.5938 34.6641L10.1672 36H7.19578L6.25781 35.6484L5.08641 36H3.67031C1.64672 36 0 34.3533 0 32.3297V12.2766L0.421875 11.25L0 10.1672V9.31781C0 7.29422 1.64672 5.6468 3.67031 5.6468H5.13L6.11719 6.32813L7.24219 5.6468H10.1672L13.9922 7.17188L17.5078 6.39844C19.0388 11.0538 20.314 7.59888 20.3203 9.5625Z"
                      fill="#68B9CF"
                    />
                    <path
                      d="M21.3176 9.31768V32.3294C21.3176 34.3532 19.6708 36 17.647 36H10.6588V6.2799L11.7882 5.64709H17.6471C19.6709 5.64709 21.3176 7.29388 21.3176 9.31768Z"
                      fill="#68B9CF"
                    />
                    <path
                      d="M21.3173 10.1672H12.2766V5.6468H10.1672V10.1672H7.23291L7.23938 5.6468H5.13L5.12353 10.1672H0V12.2766H5.12051L5.08641 36H7.19578L7.22988 12.2766H10.1672V36H12.2766V12.2766H21.3173V10.1672Z"
                      fill="#4AB7D3"
                    />
                    <path
                      d="M21.3176 10.1647H11.7882V5.64709H10.6588V36H11.7882V12.2823H21.3176V10.1647Z"
                      fill="#42A8C3"
                    />
                    <path
                      d="M26.1657 14.6824H19.999C18.0014 14.6824 16.3765 16.3073 16.3765 18.305V20.2589C16.3765 20.8433 16.8508 21.3177 17.4353 21.3177H28.7294C29.3139 21.3177 29.7882 20.8434 29.7882 20.2589V18.305C29.7882 16.3073 28.1633 14.6824 26.1657 14.6824ZM27.6706 19.2L23.0823 20.2547L18.4941 19.2V18.305C18.4941 17.4748 19.1689 16.8 19.999 16.8H26.1657C26.9958 16.8 27.6706 17.4748 27.6706 18.305V19.2H27.6706Z"
                      fill="#525C74"
                    />
                    <path
                      d="M29.7883 18.3049V20.2589C29.7883 20.8433 29.314 21.3177 28.7295 21.3177H23.0824V20.536L27.6706 19.2V18.3049C27.6706 17.4748 26.9958 16.8 26.1657 16.8H23.0824V14.6823H26.1657C28.1634 14.6824 29.7883 16.3073 29.7883 18.3049Z"
                      fill="#444E66"
                    />
                    <path
                      d="M36.0001 22.241V32.9591C36.0001 34.6355 34.6356 36 32.9591 36H13.2057C11.5293 36 10.1648 34.6355 10.1648 32.9591V22.241C10.1648 20.5645 11.5293 19.2 13.2057 19.2H32.9591C34.6356 19.2 36.0001 20.5644 36.0001 22.241Z"
                      fill="#FFCAAF"
                    />
                    <path
                      d="M36.0001 22.241V32.9591C36.0001 34.6355 34.6356 36 32.9591 36H23.0824V19.2H32.9591C34.6356 19.2 36.0001 20.5644 36.0001 22.241Z"
                      fill="#FFBFAB"
                    />
                  </svg>
                </div>
                <div>
                  <p className="ff-lato font-bold text-xl leading-7 text-gray-900">
                    Packaged Tour
                  </p>
                  <p className="ff-lato text-base leading-6 text-gray-600">
                    Vitae donec pellentesque a aliquam et ultricies auctor.
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="flex items-center ff-lato font-bold text-xl leading-7 text-gray-900 gap-2 max-w-max mt-6 max-md:mt-4 max-sm:mt-2 group transition-all duration-300 hover:text-primary"
              >
                Another Product
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-primary"
                    d="M1 13L7 7L1 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
