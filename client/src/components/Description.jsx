import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6  md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-grey-500 mb-8">Turn your imaginarion into visuals</p>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img src={assets.manDrawing} className="w-52 h-52 xl:w-64 rounded-lg" />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing the AI-powered Text to Image Generator</h2>
          <p className="text-grey-600 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly!
          </p>
          <p className="text-grey-600 ">
            Enter a text prompt, and our state-of-the-art AI will create
            stunning, high-quality images in moments. Whether it’s product
            visuals, character designs, portraits, or entirely new concepts, our
            AI brings your imagination to life with ease. With advanced
            technology driving it, the creative opportunities are endless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
