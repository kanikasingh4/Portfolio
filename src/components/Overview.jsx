import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Styles";
import "./style.css";
import { Technologies, Services } from "../constants";
import { motion } from "framer-motion";
function Overview() {
  return (
    <div className="bg-black pb-8">
      <div className="flex-row items-center p-5 justify-center" id="overview">
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%] "></hr>
        <div className={Styles.sectionText}>
        Motivated and results-driven Computer Science student with a strong command of Python, JavaScript, and the MERN stack. Demonstrated expertise in developing scalable, user-centric web applications. Passionate about solving complex challenges using Data Structures and Algorithms, with a keen interest in continuous learning and growth. Eager to leverage my skills in a dynamic environment to drive innovation and contribute to impactful projects.
        </div>
      </div>
      <div className="flex flex-wrap bg-black justify-center">
        {Services.map((Services) => (
          <div>
            <Tilt
              key={Services.icon}
              className="parallax-effect-glare-scale bg-white"
              perspective={500}
              glareColor="  rgb(253 255 119 ) "
              glareEnable={true}
              glareMaxOpacity={0.5}
              sale={1.02}
              gyroscope={true}
            >
              <div className=" p-0 m-3 bg-white flex flex-col justify-evenly items-center  ">
                <img
                  className="h-[180px] w-[200px]"
                  src={Services.icon}
                  alt={Services.title}
                ></img>
                <div className="m-5 text-yellow-400 font-medium">
                  {Services.title}
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center text-white ">
        {Technologies.map((Technologies) => (
          <div
            key={Technologies.name}
            className=" hover:text-yellow-400 m-4 mt-5 h-[80px] w-[80px] rounded-full shadow-2xl border-[2px] border-slate-50 transition ease-in-out delay-150 bg-slate-50 hover:-translate-y-1 hover:scale-110 hover:shadow-yellow-400 duration-200 ..."
          >
            <img
              className="p-2"
              src={Technologies.icon}
              alt={Technologies.icon}
            ></img>
            <div className="  mt-2 font-medium justify-center flex">
              {Technologies.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
