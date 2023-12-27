import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Skills = () => {
  const skills = [
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "JavaScript",
    },
    {
      skill: "React JS",
    },
    {
      skill: "Node JS",
    },
    {
      skill: "Express JS",
    },
    {
      skill: "EJs",
    },
    {
      skill: "MySql",
    },
    {
      skill: "Npm",
    },
    {
      skill: "GitHub",
    },
    {
      skill: "TailWind CSS",
    },
  ];

  return (
    <div className="h-[15rem] w-full flex items-center justify-center flex-col overflow-auto">
      <div className="h-[10rem] w-6/6 flex flex-col items-center justify-center">
        <div>
          <h1>Skills</h1>
        </div>
        <div
        
        
        className="flex lg:w-5/6 flex-wrap items-center justify-center">
          {skills.map((skill, index) => (
            <motion.div
             variants={fadeIn('up',0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.1}}
              key={index}
              className="w-[6rem] h-[2rem] cursor-pointer text-sm m-1 bg-slate-800 flex items-center justify-center border-2  gradient-border  lg:m-2 lg:text-md lg:w-[7rem] transition-all ease-in-out hover:bg-slate-900"
            >
              {skill.skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
