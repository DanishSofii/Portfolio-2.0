import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    sname:'Web Development',
    description: 'I am a web developer. Have done some minor projects and currently working on bigger projects for learning purposes',
    // link: 'Learn more'

  }
]

const Services = () => {
  return (
  
  <section className='section h-6/6 ' id='services'>
    {/* services */}
    <div className='container mx-auto h-full '>
      <div className='flex flex-col lg:flex-row h-full '>
      {/* text */}
      <motion.div 
      variants={fadeIn('right',0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.1}}
      className='flex-1 lg:bg-services lg:bg-center bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h1 className=' h2 text-accent mb-6 '>
          What I Do
        </h1>
        <h3 className='h3 max-w-[455px] mb-16'>
          I'm a  web Developer and a student
        </h3>
        <button className='btn btn-sm'><a href='#work'>See my work</a></button>
      </motion.div>
      {/* {services} */}
      <motion.div
      variants={fadeIn('left',0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.1}}
      className='flex-1'>
        <div>
          {services.map((service,index)=>{
            const {sname ,description} = service;
            return(
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px] '>
                  <h4 className='text-[29px] tracking-wider font-primary font-semibold mb-6 '>{sname}</h4>
                <p className='font-secondary leading-tight '>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end '>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/></a>
                  {/* <a href='#' className='text-gradient text-sm ' >{link}</a> */}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
    </div>

  </section>);
};

export default Services;
