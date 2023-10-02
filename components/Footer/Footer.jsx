import React from "react";

const Footer = () => {
 return (
  <div className="bg-cyan-800 text-white p-4 capitalize text-center relative">
   All rights are reserved to techy Blog project 2023
   <ul className="flex gap-2 m-auto justify-center leading-relaxed text-orange-300">
    <li>based on tech : </li>
    <li>Nextjs</li>
    <li>tailwindcss</li>
    <li>Strapi</li>
   </ul>
   <span className="absolute bottom-4 right-2 shadow-lg">
    <a
     href="#top"
     className=" rounded-full bg-yellow-50 text-black w-10 h-10 flex items-center justify-center">
     top
    </a>
   </span>
  </div>
 );
};

export default Footer;
