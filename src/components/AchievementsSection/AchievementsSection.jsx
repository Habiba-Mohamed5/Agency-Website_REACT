import React from "react";
import styles from "./AchievementsSection.module.css";
import { FaAward } from "react-icons/fa"; // مثال لو حابب تستخدم أيقونة

const achievements = [
  {
    date: "September 2023",
    title: "GLOBAL RECOGNITION FOR INNOVATION",
    description:
      "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.",
  },
  {
    date: "March 2019",
    title: "INDUSTRY LEADERSHIP ACKNOWLEDGED",
    description:
      "Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction.",
  },
  {
    date: "August 2015",
    title: "EXPANSION INTO INTERNATIONAL MARKETS",
    description:
      "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.",
  },
  {
    date: "January 2010",
    title: "PIONEERING THE DIGITAL FRONTIER",
    description:
      "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.",
  },
];

const AchievementsSection = () => {
  return (
    <section className={styles.achievements}>
      <div className="container-fluid my-5">
        <div className={styles.sectionHeaderWrapper}>
          <h2 className={styles.sectionHeading}>OUR ACHIEVEMENTS</h2>
        </div>
        <div className="row">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-md-3">
              <div className={styles.achievementCard}>
                <div className={styles.cardHeader}>
                  <FaAward style={{ marginRight: "8px", color: "#e5b9a4" }} />
                  {achievement.date}
                </div>
                <div className={styles.cardBody}>
                  <h5>{achievement.title}</h5>
                </div>
                <div className={styles.cardFooter}>
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
