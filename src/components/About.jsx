import React from "react";
import Profile from "../assets/Profile.svg";
import { Styles } from "../utils/Styles";
import resume from "../assets/KANIKA SINGH.pdf";
import { MdFileDownload } from "react-icons/md";

import "../App.css";

function About() {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 p-10"
      id="Home"
    >
      <div className="flex-1 py-4">
        <span className={Styles.heroHeadText}> Hello, It's Me Kanika Singh</span>
      
          <br />
         <span className={Styles.heroHeadText}>And I'm a <br></br>Software Developer </span>
       
        <br />
        <div className="w-[14rem] mt-8 cursor-pointer ">
          <a href={resume} download={resume} target="blank"
          > <div className=" p-4 mt-2 w-[13rem] font-medium rounded-xl flex justify-center text-slate-50 bg-blue-800 hover:bg-blue-500  active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ...">
          RESUME
          <MdFileDownload className="text-lg mr-3 mt-1 text-slate-50  " />
        </div></a>
         
        </div>
      </div>
      <div className="flex flex-warp mt-12">
        <img
          src={Profile}
          className="element object-contain p-4"
          alt="..."
        ></img>
      </div>
    </div>
  );
  
}

export default About;
