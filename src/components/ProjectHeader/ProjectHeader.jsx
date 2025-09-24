import React from "react";
import styles from "./ProjectHeader.module.css";

import headerImg from "../../assets/images/project imgs/Card.png";

const ProjectHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>
          EMPOWERING YOUR
          <svg
            className={styles.rightArrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#CE7D63"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="240 90"
              strokeDashoffset="295"
            />
            <circle cx="60" cy="60" r="32" fill="#CE7D63" />
            <line
              x1="44"
              y1="60"
              x2="70"
              y2="60"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <polyline
              points="61,50 74,60 61,72"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.start}>START A PROJECT</span>
          <br />
          DIGITAL VISION
        </h1>

        <p>
          At NexGen, we are committed to empowering your digital vision
          innovative solution tailored to unique needs. Our team of skilled
          proffisionals, coupled with cutting-edge technologies, ensures that we
          deliver exceptional results that elevate your online presence.
        </p>
      </div>

      <img
        className={styles.headImg}
        src={headerImg}
        alt="photo for the header"
      />
    </div>
  );
};

export default ProjectHeader;
