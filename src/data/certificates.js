import OCPL from "../assets/Projects/ocpl.jpeg"
import Roorkee from "../assets/Projects/Ropar.jpeg"
import Ropar from "../assets/Projects/Roorkee.jpeg"
const projects = [
    {
      img: Ropar,
      code: "https://www.iitrpr.ac.in/",
      style: {
        shadow: "shadow-[#763145]",
        cover: "from-[#763145]",
        display: "hidden",
      },
    },
    {
        img: OCPL,
        code: "https://ocpl.tech/",
        style: {
          shadow: "shadow-[#F8FAFC]",
          cover: "from-[#F8FAFC]",
          display: "hidden", 
          
        },
      },
    {
      img: Roorkee,
      code: "https://www.iitr.ac.in/",
      style: {
        shadow: "shadow-[#FB923C]",
        cover: "from-[#FB923C]",
        display: "hidden", // Remove group-hover:flex
      },
    },
  ];
  
  export default projects;
  