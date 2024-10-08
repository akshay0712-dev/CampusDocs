import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Whats from "../whats.jsx";
import Docs from "../docs.jsx";
import Syllabus from "../syllabus/syllabus.jsx";
import Weather from "../weather.jsx";
import Map from "../map.jsx";


const services = [
  {
    serviceLink: "Docs",
    iconClass: "material-symbols-outlined ",
    iconName: "file_copy",
    serviceName: "Documents",
  },
  {
    serviceLink: "WhatsGrp",
    iconClass: "fa fa-whatsapp text-white",
    iconName: "",
    serviceName: "WhatsApp Groups",
  },
  {
    serviceLink: "Syllabus",
    iconClass: "material-symbols-outlined ",
    iconName: "menu_book",
    serviceName: "Syllabus",
  },
  {
    serviceLink: "Calendar",
    iconClass: "material-symbols-outlined ",
    iconName: "calendar_month",
    serviceName: "Calendar",
  },
  // {
  //   iconClass: "",
  //   iconName: "",
  //   serviceName: "",
  // },
];

const Home = () => {
  return (
    <>
      <div className="homePage">
        <img className="bgImg" src="./images/homeBg2.jpg" alt="" />
        <h1 className="text-lg leading-none w-[95vw]">Welcome to OneStop.</h1>
        <h3 className="w-[80vw]">
          Discover OneStop: The go-to platform for all your college needs
        </h3>
        <div className="absolute z-10 right-0 bottom-[0%] md:bottom-[76%]  text-white">
          <Weather />
        </div>
      </div>

      <section className="flex flex-row justify-between flex-wrap w-[95vw] md:w-[80vw] bg-gray-800 m-auto rounded-xl my-[3vh] p-6 md:p-8">
        {services.map((service, index) => (
          <NavLink
            to={`/campusDocs/${service.serviceLink}`}
            key={index}
            className="text-white bg-gray-700 p-5 w-[35vw] flex flex-col  md:justify-evenly items-center gap-3 rounded-2xl md:gap-5 my-2 cursor-pointer"
          >
            <span className={service.iconClass} style={{ fontSize: "32px" }}>
              {service.iconName}
            </span>
            <div className="text-white text-xl md:text-3xl text-center">
              {service.serviceName}
            </div>
          </NavLink>
        ))}
      </section>

      <Docs />
      <Whats />
      <div className="syllabus-box mx-auto w-[95vw] md:w-[80vw] max-h-[80vh] rounded-lg overflow-hidden ">
        <NavLink to={`/campusDocs/Syllabus`}>
          <div className="mx-auto w-[95vw] md:w-[80vw] max-h-[80vh] overflow-y-auto overflow-x-hidden custom-scrollbar ">
            <Syllabus />
          </div>
        </NavLink>
      </div>
      <Map />
    </>
  );
};

export default Home;
