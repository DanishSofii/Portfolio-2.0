import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/im1.png";
import Img2 from "../assets/im2.png";
import Img3 from "../assets/im3.png";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 lg:mb-0"
          >
            {/* text */}

            <h2 className="h2 leading-tight text-accent">
              My latest <br /> work:{" "}
            </h2>
            <p className="max-w-sm mb-16">Library ManageMent System</p>
            <button className="btn btn-sm mb-2 w-3/6"><a href="https://github.com/DanishSofii?tab=repositories" target="_blank">View All Projects</a></button>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* image */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Manage library Database</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Library Management System
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  <a
                    href="https://github.com/DanishSofii/DBMS-Project"
                    target="_blank"
                  >
                    <FaGithub className="hover:text-orange-500" />
                  </a>{" "}
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  flex flex-col gap-y-20 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* image */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Split bills with friends</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Eat-n-Split</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  <a
                    href="https://github.com/DanishSofii/pizza-menu"
                    target="_blank"
                  >
                    <FaGithub className="hover:text-orange-500" />
                  </a>{" "}
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* image */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Weather Data Provider</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Weather app</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  <a
                    href="https://github.com/DanishSofii/Weather-App"
                    target="_blank"
                  >
                    <FaGithub className="hover:text-orange-500" />
                  </a>{" "}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
