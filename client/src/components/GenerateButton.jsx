import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faMagic,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const GenerateButton = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">See the magic try Now</h1>
      <button className="inline-flex item-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500">Generate Images<FontAwesomeIcon className="h-6"icon={faMagic}/></button>
    </div>
  );
};

export default GenerateButton;
