import html from "../assets/html.png";
import bootstrap from "../assets/bootstrap.webp";
import c from "../assets/c.png";
import css from "../assets/css.webp";
import git from "../assets/git.png";
import js from "../assets/js.webp";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import python from "../assets/python.png";
import reactjs from "../assets/reactjs.webp";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.gif";
import web from "../assets/web.gif";
import UX from "../assets/UX.webp";
import todoapp from "../assets/todo-app.png"
import roshambo from "../assets/roshambo.png"
import bankweb from "../assets/bank app.png"

const Services=[
    {
        title:"Web Developer",
        icon: web,
    },
    {
        title:"React Developer",
        icon: react,
    },
    {
        title:"UI/UX Designer",
        icon: UX,
    },
];

const Technologies=[
   
    {
        name:"HTML 5",
        icon:html,
    },
    {
        name:"CSS",
        icon:css,
    },
    {
        name:"JAVASCRIPT",
        icon:js,
    },
    {
        name:"BOOTSTRAP",
        icon:bootstrap,
    },
    {
        name:"TAILWIND",
        icon:tailwind,
    },
    {
        name:"GIT",
        icon:git,
    },
    {
        name:"REACT.JS",
        icon:reactjs,
    },
    {
        name:"NODE.JS",
        icon:nodejs,
    },
    {
        name:"MONGO DB",
        icon:mongodb,
    },
   
    {
        name:"PYTHON",
        icon:python,
    },
    {
        name:"C",
        icon:c,
    },

];

const Projects=[
    {
        name:"UNO",
        description:"Built a social media platform using MERN stack, featuring user authentication, posts, comments, likes, and real-time chat. Integrated JWT for secure login and WebSockets for real-time messaging.",
        tags:[
            {
                name:"BOOTSTRAP",
                color:"yellow-text-gradient",
            },
            {
                name:"REACT.JS",
                color:"yellow-text-gradient",
            },
        ],
        image:todoapp,
        source_code_link:"https://github.com/kanikasingh4/UNO",
        source_deploy_link:"https://uno-il5c.onrender.com",

    },

    {
        name:"GitHub Fetcher",
        description:"Developed a GitHub Fetcher application that allows users to search for GitHub profiles and repositories using the GitHub API.",
        tags:[
            {
                name:"JAVASCRIPT",
                color:"yellow-text-gradient",
            },
            {
                name:"CSS",
                color:"yellow-text-gradient",
            },
        ],
        image:roshambo,
        source_code_link:"https://github.com/kanikasingh4/GitHub_Profiles",
        source_deploy_link:"https://github-profiles-o593.onrender.com/",

    },

    {
        name:"MORDEN BANK",
        description:"Designed a responsive banking application using React.js and Tailwind CSS, featuring an eye-catching hero section, high-quality assets, and reusable feature sections.",
        tags:[
            {
                name:"TAILWIND",
                color:"yellow-text-gradient",
            },
            {
                name:"REACT.JS",
                color:"yellow-text-gradient",
            },
        ],
        image:bankweb,
        source_code_link:"https://github.com/kanikasingh4/bank-app",
        source_deploy_link:"https://bank-app-rust.vercel.app/",

    },
];

export {Services, Technologies, Projects};

