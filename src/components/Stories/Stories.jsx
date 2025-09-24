import React, { useState } from "react";
import styles from "./Stories.module.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// استيراد الصور من مجلد assets
import serviceIcon4 from "../../assets/images/service/Icon Container (4).png";
import serviceIcon5 from "../../assets/images/service/Icon Container (5).png";

// Data (dynamic)
const cases = [
  {
    id: 1,
    serviceIcon: serviceIcon4,
    serviceTitle: "WEB DESIGN",
    badges: [
      "Industry · E-commerce",
      "Service Utilized · Design & Development",
    ],
    content: {
      CHALLENGE:
        "CHALLENGE — We identified the client's outdated website structure, which lacked a smooth checkout process and mobile optimization.",
      SOLUTION:
        "Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines.",
      RESULTS:
        "RESULTS — Increased conversion rate by 40%, improved SEO ranking, and boosted customer engagement significantly.",
    },
  },
  {
    id: 2,
    serviceIcon: serviceIcon5,
    serviceTitle: "WEB DESIGN",
    badges: ["Industry · Health & Fitness", "Service Utilized · Mobile App"],
    content: {
      CHALLENGE:
        "CHALLENGE — The client lacked an engaging digital solution for fitness enthusiasts to track and manage goals.",
      SOLUTION:
        "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms. Real-time data synchronization enabled users to access their data on multiple devices.",
      RESULTS:
        "RESULTS — User retention grew by 55%, daily active users doubled, and the app received high ratings on app stores.",
    },
  },
];

const Stories = () => {
  return (
    <section className={styles.stories} aria-labelledby="stories-heading">
      {/* Top Section */}
      <div className={`${styles.storiesTop} ${styles.storiesTitle}`}>
        <h3 id="stories-heading">SUCCESS STORIES</h3>
        <div className={styles.storiesImgText}>
          <a href="#" className={`${styles.storiesArrowLink} `}>
            <FaArrowUpRightFromSquare />
          </a>
          <span>OPEN PROJECT</span>
        </div>
      </div>

      {/* Case List */}
      <div className={styles.storiesCaseList}>
        {cases.map((item) => (
          <StoryCase key={item.id} caseData={item} />
        ))}
      </div>
    </section>
  );
};

// ------------------
// Single Case
// ------------------
const StoryCase = ({ caseData }) => {
  const [activeTab, setActiveTab] = useState("SOLUTION");

  return (
    <div className={styles.storiesCase}>
      {/* Left Meta */}
      <div className={`${styles.storiesMeta} ${styles.storiesCard}`}>
        <div className={styles.storiesServiceInfo}>
          <img src={caseData.serviceIcon} alt="service icon" />
          <div className={styles.storiesServiceTitle}>
            {caseData.serviceTitle}
          </div>
          <div className={styles.storiesServiceBtn}>
            <a href="#" className={styles.storiesArrowLink}>
              <FaArrowUpRightFromSquare />
            </a>
            <span className={styles.storiesBookSpan}>BOOK A CALL</span>
          </div>
        </div>

        <div className={styles.storiesBadges}>
          {caseData.badges.map((badge, i) => (
            <div key={i} className={styles.storiesPill}>
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Right Solution */}
      <div className={styles.storiesSolution}>
        {/* Tabs */}
        <div
          className={styles.storiesTabs}
          role="tablist"
          aria-label="Case tabs"
        >
          {["CHALLENGE", "SOLUTION", "RESULTS"].map((tab) => (
            <div
              key={tab}
              className={`${styles.storiesTab} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Content */}
        <div
          className={`${styles.storiesSolutionContent} ${styles.storiesCard}`}
        >
          <div className={styles.storiesSolutionTitle}>{activeTab}</div>
          <div className={styles.storiesSolutionTxt}>
            {caseData.content[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
