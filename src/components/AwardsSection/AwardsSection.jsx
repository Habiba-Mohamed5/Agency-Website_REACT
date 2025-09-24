import React from "react";
import styles from "./AwardsSection.module.css";
import { FaAward } from "react-icons/fa6";

const awards = [
  {
    date: "Date • October 2017",
    title: "DIGITAL EXCELLENCE AWARD",
    description:
      "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions.",
  },
  {
    date: "Date • March 2019",
    title: "TOP MOBILE APP DEVELOPMENT AGENCY",
    description:
      "Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless mobile applications.",
  },
  {
    date: "Date • July 2022",
    title: "BEST DIGITAL MARKETING CAMPAIGN",
    description:
      "Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts.",
  },
  {
    date: "Date • November 2024",
    title: "INNOVATIVE TECH STARTUP AWARD",
    description:
      "Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies.",
  },
];

const AwardsSection = () => {
  return (
    <div className={`container-fluid my-5`}>
      <div className={styles.sectionHeaderWrapper}>
        <h2 className={styles.sectionHeading}>Awards & Recognitions</h2>
      </div>

      <div className="row">
        {awards.map((award, index) => (
          <div key={index} className="col-md-3">
            <div className={styles.awardCard}>
              <div className={styles.dateBox}>
                <span className={styles.date}>{award.date}</span>
                <span className={styles.icon}>
                  <FaAward />
                </span>
              </div>
              <h5>{award.title}</h5>
              <p>{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
