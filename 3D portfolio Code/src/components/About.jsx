import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  max-w-3xl leading-[30px]"
      >
        My name is Usman Rahim, I'm Software
        Engineer from UBIT, University of Karachi. As I completed my graduation, I am excited to showcase my skills as a passionate software engineer. I have earned a certification in blockchain technology from
        Jawan Pakistan, solidifying my expertise in this field. In addition, I
        am adept at frontend development, with a keen passion for creating
        captivating user interfaces for websites. With a strong focus on
        building and developing decentralized applications, I consistently
        strive for excellence. I take pride in my ability to work effectively as
        a team member while also possessing valuable leadership qualities. This
        introduction highlights my diverse skill set and showcases my dedication
        to delivering high-quality work.
      </motion.p>
      <div className="mt-12 flex flex-row">
        <button className="bg-[#915eff] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer hover:cursor-pointer">
          <a
            href="https://github.com/usman-2000"
            className="flex flex-row"
            target="_black"
          >
            Github
            <img src={github} alt="source code" className="w-5 h-5 ml-1" />
          </a>
        </button>
        <button className="bg-white py-3 px-8 rounded-xl outline-none w-fit text-[#915eff] font-bold shadow-md shadow-primary cursor-pointer hover:cursor-pointer ml-5">
          <a
            href="https://www.linkedin.com/in/usman-rahim-2000urk/"
            className="flex flex-row"
            target="_black"
          >
            LinkedIn
          </a>
        </button>
      </div>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
