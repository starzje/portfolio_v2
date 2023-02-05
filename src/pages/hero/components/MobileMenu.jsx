import React from "react";
import { motion } from "framer-motion";
import uuid4 from "uuid4";
// animations
import {
  mobileNavSlider,
  mobileListItem,
  mobileButtonItem,
  githubIconAnimation,
} from "../../../helpers/animations";
import { menu } from "../../../constants/index";

const MobileMenu = ({ handleClick }) => {
  return (
    <motion.div
      key={uuid4()}
      variants={mobileNavSlider}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed  -right-0 mobile-fix   w-screen fullheight h-full md:h-screen overflow-hidden touch-none bg-slate-900 bg-opacity-100 z-[100]  ">
      <nav className=" flex flex-col items-center justify-center h-full">
        {menu.map((item) => (
          <motion.li
            variants={mobileListItem}
            initial="hidden"
            whileInView="visible"
            key={uuid4()}
            className="
                  mb-10
                inline-block
                text-white
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100">
            <motion.a
              layout
              key={uuid4()}
              href={item.link}
              className="text-white text-2xl font-bold uppercase tracking-widest "
              onClick={handleClick}>
              {item.name}
            </motion.a>
          </motion.li>
        ))}
        <motion.a
          layout
          variants={mobileButtonItem}
          initial="hidden"
          whileInView="visible"
          className="bg-[#1F1CA1] hover:bg-[#2826b0] inline-block font-semibold text-center text-2xl  py-2 px-5 text-white rounded-2xl tracking-wider"
          href="https://drive.google.com/file/d/1q8-ep4xgRsE7daMLPkjSGhSGPRNQhPBZ/view?usp=sharing"
          target="_blank"
          rel="noreferrer">
          Download CV
        </motion.a>
        <motion.a
          layout
          variants={githubIconAnimation}
          initial="hidden"
          whileInView="visible"
          className=" top-3 left-4 absolute z-100 "
          href="https://github.com/starzje"
          target="_blank">
          <motion.i
            layout
            className="devicon-github-original text-4xl text-white hover:text-blue-600 transition duration-300"></motion.i>
        </motion.a>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;