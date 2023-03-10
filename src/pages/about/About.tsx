import * as React from "react";
import { motion } from "framer-motion";
import {
  aboutMeAnimation,
  aboutMeParagraph,
  aboutMeImage,
} from "../../helpers/animations";
import LazyImage from "../../helpers/LazyImage";
import lozad from "lozad";

const observer = lozad(".lozad", {
  loaded: function (el) {
    el.classList.add("fade");
  },
});
observer.observe();

const About = () => {
  return (
    <motion.section
      variants={aboutMeAnimation}
      initial="hidden"
      animate="visible"
      className=" section md:fp-auto-height pt-20 pb-40 md:pb-0 md:pt-0 md:h-[120vh] min-h-full md:min-h-screen bg-top -mt-24 mt:0  md:mt-[-20vh] z-100 bg-cover  bg-[url('../src/assets/bottom_2.svg')]  bg-no-repeat flex justify-center items-center relative lozad"
      data-src="../src/assets/bottom_2.svg"
    >
      <div className="container">
        <div className="flex justify-end items-center h-full md:h-screen  ">
          <motion.div
            variants={aboutMeParagraph}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className=" text-[2rem] md:text-5xl font-bold  text-white pt-10 mt-4 mb-4">
              Why me?
            </h2>
            <p className="text-white max-w-xl text-[1rem] md:text-[1.1rem] mb-10 md:mb-0">
              I&apos;m a front-end developer with a strong background in design.
              I have a passion for creating beautiful and functional websites.
              I&apos;m always looking for new challenges and opportunities to
              learn and grow.
              <br />
              <br />
              <span className="text-[#F9A826] font-bold tracking-wider">
                Development:
              </span>{" "}
              TypeScript, React, Next.js, Redux, TailwindCSS, SASS, Firebase,
              Strapi, Framer Motion, Git, Webpack, Docker.
              <br />
              <br />
              <span className="text-[#F9A826] font-bold tracking-wider">
                Design:
              </span>{" "}
              Figma, Adobe suite, Affinity suite.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0  ">
        <LazyImage
          viewport={{ once: true }}
          variants={aboutMeImage}
          src="./assets/bottom_1_1.svg"
          alt="example image"
          className="w-full"
        />
      </div>
    </motion.section>
  );
};

export default About;
