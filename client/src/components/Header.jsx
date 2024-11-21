import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCameraRetro,
  faPaintBrush,
  faStar,
  faStarAndCrescent,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Convert Your Imagination into Real Vision</p>
        <FontAwesomeIcon className="text-2xl text-orange-800" icon={faStar} />
        {/* <img /> */}
      </motion.div>
      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turning Concepts into Masterpieces.
      </h1>
      <p>
        Bring your thoughts to life like never before. With just a few words, AI
        transforms your imagination into stunning visuals, opening endless
        possibilities for creativity and expression.
      </p>
      <motion.button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileInView={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Image
        <FontAwesomeIcon className="text-yellow-500" icon={faPaintBrush} />
      </motion.button>
      {/* <div>{Array(6).fill('').map((item,index)=>{
        <img src=""/>

      })}</div> */}
    </motion.div>
  );
};

export default Header;
