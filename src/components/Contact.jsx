import React from "react";
import { Styles } from "../utils/Styles";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
function Contact() {
  return (
    <div className="bg-black">
      <div className="flex-row items-center p-5 justify-center  " id="Contact">
        <span className={Styles.sectionHeadText}>Contact</span>
        <hr className="w-[31%]  "></hr>
      </div>
      <div className="mt-5 bg-black flex justify-center">
        <div className="flex flex-wrap flex-row bg-gray-900 shadow-2xl shadow-gray-700 justify-around rounded-xl m-3 w-[40rem] ">
          <div className="lg:w-[70%]">
            <form className="m-5 flex flex-col gap-3">
              <label className=" flex flex-col gap-3">
                <span className="text-yellow-400 font-medium mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="Name"
                  placeholder="Whats your name ?"
                  className="bg-slate-50 bg-opacity-80 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                ></input>
              </label>

              <label className=" flex flex-col gap-3">
                <span className="text-yellow-400 font-medium mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Whats your Email ?"
                  className="bg-slate-50 bg-opacity-80 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                ></input>
              </label>

              <label className=" flex flex-col gap-3">
                <span className="text-yellow-400 font-medium mb-2">
                  Your Message
                </span>
                <textarea
                  row={5}
                  name="text"
                  placeholder="Whats you want to say ?"
                  className="bg-slate-50 bg-opacity-80 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                ></textarea>
              </label>
              <button
                type="Submit"
                className="bg-gray-300 hover:text-white hover:bg-gray-600 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-slate-900 font-bold shadow-md shadow-primary"
              >
                Submit
              </button>
            </form>
          </div>

         
        </div>
      </div>


      <div className="m-2">
      <div className='w-[screen] bg-black bg-opacity-100 flex flex-row justify-evenly'>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href='https://www.linkedin.com/in/kanika-singh-6a0a1b274/' target='blank' className='text-lg flex flex-row text-yellow-400'>
           
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-yellow-400'>
            <BsLinkedin className='text-white' />
            
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>LinkedIn</span>
            </a>
        </div>

        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href='kanikac363@gmail.com' target='blank' className='text-lg flex flex-row text-yellow-400'>
            
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-yellow-400'>
            
            <MdEmail className='text-white'/>
            
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>kanikac363@gmail.com</span>
            </a>
        </div>

        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href='https://github.com/kanikasingh4' target='blank' className='text-lg flex flex-row text-yellow-400'>
            
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-yellow-400'>
            
            <FaGithub className='text-white'/>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>GitHub</span>
            </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
