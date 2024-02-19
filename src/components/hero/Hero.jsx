import Lottie from "lottie-react";
import laptop from "../../../public/animation/laptop.json";
import { motion } from "framer-motion";

import "./hero.css";

export default function Hero() {
  return (
    <section className="hero flex " id="up">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img className="avatar" src="./My_photo.jpg" alt="" />
          <div className="icon-verified" />
        </div>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          {" "}
          Software Engineer
        </motion.h1>
        <p className="sub-title">
          {" "}
          Full Stack Developer with MERN stack proficiency , committed to
          building innovative web solutions and driving business success through
          scalable and efficient development
        </p>
        <div className="all-icons flex">
          <div className="icon icon-github" />
          <div className="icon icon-linkedin" />
          <div className="icon" />
          <div className="icon" />
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          className="laptop-animation"
          style={{ height: 500 }}
          animationData={laptop}
        ></Lottie>
      </div>
    </section>
  );
}
