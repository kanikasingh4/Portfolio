import Main from "./components/Main";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="absolute w-screen">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="absolute">
          <Main />
        </div>
        <div className="relative">
          <About />
        </div>

      </div>
      <div className=" flex flex-col overflow-hidden relative bg-slate-50">
        <Overview />
        <Project />
      <Contact></Contact>
       
      </div>

    </div>
  );
}

export default App;
