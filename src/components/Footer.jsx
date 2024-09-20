import React from "react";
import { NavLink } from "react-router-dom";

const Navs = [
  { navLink: "Home", navText: "Home" },
  { navLink: "Docs", navText: "Docs" },
  { navLink: "WhatsGrp", navText: "WhatsGrp" },
  { navLink: "Syllabus", navText: "Syllabus" },
  { navLink: "Callender", navText: "Callender" },
];

const Footer = () => {
  return (
    <>
      {/* .........footer.......... */}

      <footer className="px-[4vw] md:px-[10vw] mx-auto">
        {/* .....footer Get in Touch....... */}
        <div className="flex md:grid md:grid-cols-2 flex-col justify-between py-4">
          <div className="border-b-2 md:border-b-0 border-[#bbb8b8] md:border-r-2 ">
            <p className="head1 text-3xl md:text-6xl">Get in touch!</p>
            <p className="head2 text-sm md:text-xl">akshayrishu4@gmail.com</p>
          </div>

          {/* .......important Links */}
            <div className="">
            <div className="head1 text-3xl md:text-4xl">Important Links</div>

          <div className="flex flex-row justify-evenly" >
              <div className="flex flex-col ">
                <NavLink
                  to="/campusDocs/Home"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/campusDocs/Docs"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center`
                  }
                >
                  Docs
                </NavLink>
              </div>
              <div className="flex flex-col ">
                <NavLink
                  to="/campusDocs/WhatsGrp"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center`
                  }
                >
                  WhatsGrp
                </NavLink>
                <NavLink
                  to="/campusDocs/Syllabus"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center`
                  }
                >
                  Syllabus
                </NavLink>
              </div>
              <div className="flex flex-col ">
                <NavLink
                  to="/campusDocs/Callender"
                  className={(e) =>
                    `${
                      e.isActive ? "text-white" : "text-[#85888a]"
                    } uppercase p-4 cursor-pointer hover:scale-125 w-full md:w-fit text-center`
                  }
                >
                  Callender
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex flex-row items-center justify-between pt-4">
          <p className="text-[#bbb8b8] text-xs md:text-sm ">
            &copy; 2024 Your Company. All rights reserved.
          </p>

          <div className=" flex flex-row gap-5 ">
            <a
              className="hover:scale-125"
              href="https://www.instagram.com/akshay__rishu/"
            >
              <i className="fa fa-instagram text-white text-xl md:text-2xl "></i>
            </a>
            <a
              className="hover:scale-125"
              href="https://www.linkedin.com/in/akshay-kumar-93b487215/"
            >
              <i className="fa fa-linkedin text-white text-xl md:text-2xl "></i>
            </a>
            <a
              className="hover:scale-125"
              href="https://github.com/akshay0712-dev/campusDocs"
            >
              <i className="fa fa-github text-white text-xl md:text-2xl "></i>
            </a>
          </div>
        </div>
        <hr className="mt-3"/>
      </footer>
    </>
  );
};

export default Footer;
