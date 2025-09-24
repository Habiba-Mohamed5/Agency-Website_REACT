import React from "react";
import styles from "./OurWorks.module.css";

import arrowBtn from "../../assets/images/Button.png";
import starIcon from "../../assets/images/star.png";
import lampIcon from "../../assets/images/lamp.png";
import style1 from "../../assets/images/style.png";
import style2 from "../../assets/images/style2.png";
import memb1 from "../../assets/images/memb1.png";
import memb2 from "../../assets/images/memb2.png";

// -------------------------
// Projects Data (Dynamic)
// -------------------------
const projects = [
  {
    id: 1,
    title: "Zenith Fitness App",
    icon: starIcon,
    category: "Mobile App Development",
    time: "6 months",
    desc: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance",
    image: style1,
    technologies: ["React Native", "Firebase", "Redux", "Rest Api", "MongoDB"],
    teamImage: memb1,
  },
  {
    id: 2,
    title: "A-Aura Ecommerce",
    icon: lampIcon,
    category: "Web Design & Development",
    time: "3 months",
    desc: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    image: style2,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    teamImage: memb2,
  },
];

const OurWorks = () => {
  return (
    <section id="ourWorks" className={styles.ourWorks}>
      {/* Head Section */}
      <div className={styles.head5}>
        <div className={styles.head_content}>
          <h1>Our Works</h1>
          <button className={styles.readmore}>
            <img src={arrowBtn} alt="arrow" /> ALL Works
          </button>
        </div>
      </div>

      {/* Render Projects Dynamically */}
      {projects.map((project) => (
        <div key={project.id} className={styles.containerWork}>
          {/* Left Box */}
          <div className={styles.box1}>
            <h1>
              <img src={project.icon} alt="icon" width={40} height={40} />
              {project.title}
            </h1>
            <button className={styles.readmore_btn}>
              <img src={arrowBtn} alt="arrow" width={30} /> Details
            </button>
            <p>
              <span>Category</span> <span className={styles.dot}></span>{" "}
              {project.category}
            </p>
            <p>
              <span>Time Taken</span> <span className={styles.dot}></span>{" "}
              {project.time}
            </p>
            <p className={styles.desc}>{project.desc}</p>
          </div>

          {/* Middle Box */}
          <div className={styles.boxing}>
            <img src={project.image} alt={project.title} />
          </div>

          {/* Right Box */}
          <div className={styles.box2}>
            <div className={styles.member}>
              <h1>Technologies Used</h1>
              {project.technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
            <div className={styles.booking}>
              <h1>
                Team Members <img src={project.teamImage} alt="Team" />
              </h1>
            </div>
            <div className={styles.book_butt}>
              <button>Book A Call</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurWorks;
