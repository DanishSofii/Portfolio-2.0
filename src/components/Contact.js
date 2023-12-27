import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k8ui0mq', 'template_x9h9tvn', form.current, 'vYZIllxcy1vcRfN08')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className=" py-16 lg:section " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right',0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.1}}
          className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get In Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br /> Together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form ref={form} onSubmit={sendEmail}
            variants={fadeIn('left',0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.1}}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message" name="message"
            ></textarea>
            <button type="submit" className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
