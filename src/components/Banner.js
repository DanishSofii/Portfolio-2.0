import React from "react";
import Image from "../assets/DanishProfile.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="section min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Danish <span>Bashir</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1"
            >
              <span className="mr-4  text-white">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="m-8 max-auto lg:mx-0 "
            >
              dfje fjeiajf ejf aiejf jefij a ifeja fm fie jff aejfi. iejfef mdf
              iejf feifjae ff eifjeaf e fmfehfeaif.dfjae f eajf ef ejfiea ff
              ejfi f.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-auto">
              <button className="btn btn-lg"><a href="#contact">Contact Me</a></button>
              {/* <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a> */}
            </motion.div>
            <motion.div variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://www.instagram.com/danish.bashir_/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://github.com/DanishSofii" target="_blank">
                <FaGithub />
              </a>
              <a href="https://in.linkedin.com/in/danish-sofi-184318234?trk=public_profile_browsemap" target="_blank">
                <FaLinkedin />
              </a>
              
            </motion.div>
          </div>
          <motion.div variants={fadeIn("down", 0.5  )}
              initial="hidden"
              whileInView={"show"}
              className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img className="logoimg" src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
