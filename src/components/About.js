import React from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // });
  return (
    <section className="section" id="about" r>
      <div className="container ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div 
          variants={fadeIn('right',0.1)}
          initial="hidden"
          whileInView={"show"} 
          viewport={{once:false, amount:0.1}}
          className="flex-1 bg-about  bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top bg-">
            
          </motion.div>
          <motion.div
          variants={fadeIn('left',0.1)}
          initial="hidden"
          whileInView={"show"} 
          viewport={{once:false, amount:0.1}}
          className="flex-1 ">
            <h2 className="h2 text-accent ">About me</h2>
            <h3 className="h3 mb-4">I'm a Web-Developer and a student.</h3>
            <p className="mb-6">
              Hi , I am Danish . I am from Kashmir and I am currently studying in M.S. Ramaiah Institue of Technology. I  finished my secondary school in 2020 and got  99.2 % in exams. Currently staying in Bengaluru and wish to become a better Web Developer. . . . . . 
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={10} /> 
                </div> 
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              {/* <a href="#" className="text-gradient btn-link">My Portfolio</a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
