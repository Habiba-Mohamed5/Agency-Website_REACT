import React from "react";
import styles from "./TeamSection.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import member1 from "../../assets/images/Image (1).png";
import member2 from "../../assets/images/Image (2).png";
import member3 from "../../assets/images/Image (3).png";
import member4 from "../../assets/images/Image.png";
import { FaArrowRight } from "react-icons/fa6";

const members = [
  {
    name: "JOHN SMITH",
    role: "Co-Founder & CEO",
    img: member1,
  },
  {
    name: "SARAH ADAMS",
    role: "Head of Design",
    img: member2,
  },
  {
    name: "EMILY JOHNSON",
    role: "Lead Web Developer",
    img: member3,
  },
  {
    name: "WILLIAM LEE",
    role: "Lead Backend Developer",
    img: member4,
  },
];

const TeamSection = () => {
  return (
    <section className={`${styles.teamSection} container-fluid mt-5`}>
      <div className={` ${styles.teamContainer}`}>
        <div
          className={`${styles.sectionHeaderWrapper} d-flex justify-content-between align-items-center`}
        >
          <h2 className="section-heading has-border">
            MEET THE BRILLIANT MINDS BEHIND NEXGEN
          </h2>
          <a href="#" className={styles.viewAllLink}>
            VIEW ALL <FaArrowRight />
          </a>
        </div>

        <div className="row g-4">
          {members.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`${styles.memberCard} text-center p-3 rounded`}>
                <h3 className="fs-5 fw-bold mb-0 text-uppercase">
                  {member.name}
                </h3>
                <p className="text-muted text-uppercase fw-light">
                  {member.role}
                </p>
                <div className={`${styles.memberImageWrapper} mb-3`}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid rounded-0"
                  />
                </div>
                <div className={styles.socialIcons}>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
