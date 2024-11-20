import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBrush,
  faCameraRetro,
  faPaintBrush,
  faStar,
  faStarAndCrescent,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 ">
        <p>Convert Your Imagination into Real Vision</p>
        <FontAwesomeIcon className="text-2xl text-orange-800" icon={faStar} />
        {/* <img /> */}
      </div>
      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turning Concepts into Masterpieces.
      </h1>
      <p>
        Bring your thoughts to life like never before. With just a few words, AI
        transforms your imagination into stunning visuals, opening endless
        possibilities for creativity and expression.
      </p>
      <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
        Generate Image
        <FontAwesomeIcon className="text-yellow-500" icon={faPaintBrush} />
      </button>
      {/* <div>{Array(6).fill('').map((item,index)=>{
        <img src=""/>

      })}</div> */}


      
    </div>
  );
};

export default Header;
