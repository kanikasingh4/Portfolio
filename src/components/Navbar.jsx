import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import{Link} from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed w-full z-20 top-0 bg-black bg-opacity-70 ">
        <div
          className="max-w-screen-xl flex flex-wrap item-center
         justify-between mx-auto p-2"
        >
          <img src={''} alt="" className="h-12  ml-4"></img>

          <div className="flex md:order-2">
            <button
              onClick={toggle}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-grey-500 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200"
            >
              <TiThMenu className="text-blue-500 text-lg" />
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen? 'block':'hidden'}`}
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 text-xl border cursor-pointer  border-gray-100 rounded-lg md-flex-row md:flex-row md:space-x-8 md:mt-0 md:border-0 font-normal  ${
                isOpen ? "bg-blue-100 bg-opacity-70" : ""
              }`}
            ><Link spy={true} to='Home' activeclass='activeclass ' >
              <li>
                <div className="block py-2 pl-3 pr-4 rounded md:p-0  hover:text-blue-500  text-slate-50">
                  Home
                </div>
              </li>
              </Link>
              <Link spy={true} to='overview' >
              <li>
                <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-blue-500 text-slate-50">
                  About
                </div>
              </li>
              </Link>
              <Link spy={true} to='Projects' >
              <li>
                <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-blue-500 text-slate-50">
                  Projects
                </div>
              </li>
              </Link>
              <Link spy={true} to='Contact' >
              <li>
                <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-blue-500 text-slate-50">
                  Contact
                </div>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
