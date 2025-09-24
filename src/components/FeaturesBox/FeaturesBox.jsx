import React from "react";
import styles from "./FeaturesBox.module.css";

import icon1 from "../../assets/images/project imgs/Icon Container.png";
import icon2 from "../../assets/images/project imgs/Icon Container (1).png";
import icon3 from "../../assets/images/project imgs/Icon Container (2).png";
import icon4 from "../../assets/images/project imgs/Icon Container (3).png";

const FeaturesBox = () => {
  const features = [
    {
      img: icon1,
      title: "STRATEGIC PLANNING",
      text: "Every project begins with thorough research and strategic planning to ensure a holistic understanding.",
    },
    {
      img: icon2,
      title: "CUSTOMIZED SOLUTIONS",
      text: "We believe in tailoring our services to suit each project’s unique requirements, resulting in solutions.",
    },
    {
      img: icon3,
      title: "USER-CENTRIC APPROACH",
      text: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
    },
    {
      img: icon4,
      title: "TIMELY DELIVERY",
      text: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising quality.",
    },
  ];

  return (
    <div className={styles.featuresBox}>
      <h2 className={styles.featuresTitle}>KEY FEATURES OF OUR PROJECTS</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featuresCard}>
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBox;
