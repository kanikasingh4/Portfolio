import React from "react";
import { Styles } from "../utils/Styles";
import Tilt from "react-parallax-tilt";
import { Projects } from "../constants";
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function Project() {
  return (
    <div className="bg-black">
      <div
        className="flex-row items-center p-5 justify-center mt-20 "
        id="Projects"
      >
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className="w-[35%] "></hr>
        <div className={Styles.sectionText}>
          Projects involve designing and developing the user-facing part of
          websites or applications.Developed a full-stack web application using the MERN stack<span className="text-yellow-300"> (MongoDB, Express.js, React.js, Node.js)</span> and frontend
          frameworks such as <span className="text-yellow-300">Bootstrap or Tailwind</span>. Implemented responsive user interfaces, RESTful APIs, and secure user authentication with JWT. Managed data storage and retrieval using MongoDB, and ensured smooth front-end and back-end integration for seamless user experience.
        </div>
      </div>

      <div className="flex flex-wrap p-8 justify-evenly">
        {Projects.map((Projects) => (
          <Tilt
            key={Projects.name}
            className="  w-[300px] h-[400px]  flex flex-col justify-evenly hover:shadow-2xl m-10 items-center shadow-2xl hover:shadow-white  p-1 bg-gradient-to-r from-yellow-400 via-gray-900 to-black rounded-lg "
          >
            <div>
              <div className="flex flex-col justify-center items-center mb-3 ">
                <div className="flex flex-row mb-10">
                <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full hover:shadow-lg hover:shadow-yellow-300  shadow-slate-950 flex justify-center items-center">
                  <a href={Projects.source_deploy_link} target="blank">
                    <SiVercel className="text-2xl font-bold  text-slate-950 hover:text-yellow-400" />
                  </a>
                </div>

                <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg hover:shadow-yellow-400  shadow-slate-950 flex justify-center items-center">
                  <a href={Projects.source_code_link} target="blank">
                    <FaGithub className="text-2xl font-bold hover:text-yellow-400 text-slate-950" />
                  </a>
                </div>
                </div>
                {/* <img
                  src={Projects.image}
                  alt={Projects.name}
                  className="h-[150px] w-[250px] self-center border-2  rounded-2xl"
                ></img> */}

                <div className="text-2xl m-5 text-yellow-400 font-extrabold">{Projects.name}</div>
                <div className="text-center text-white">
                  <span>{Projects.description}</span>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Project;
