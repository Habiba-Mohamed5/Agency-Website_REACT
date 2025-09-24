import React from "react";
import styles from "./AboutHeader.module.css";
import { FaArrowRight } from "react-icons/fa6";

const AboutHeader = () => {
  return (
    <section className={`${styles.aboutHeader} container-fluid`}>
      <div className={`container-fluid ${styles.heroContentContainer}`}>
        <div className="row align-items-center h-100 justify-content-center">
          {/* Left Content */}
          <div className={`${styles.heroTitle} col-md-6`}>
            <div className={`${styles.heroContent} ps-5 pe-5`}>
              <h1 className="display-4 fw-bold text-uppercase">
                ELEVATING BRANDS <br /> IN THE DIGITAL AGE
              </h1>
              <div className={`d-flex align-items-center mt-5 ${styles.startProject}`}>
                <span className="me-3 text-uppercase fw-bold">START A PROJECT</span>
                <div className={styles.arrowCircle}>
                  <FaArrowRight size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="col-md-4">
            <div className="row gx-3 gy-3">
              <div className="col-6">
                <div className={styles.statBox}>
                  <div className={styles.label}>Clients</div>
                  <div className={styles.number}>200+</div>
                </div>
              </div>
              <div className="col-6">
                <div className={styles.statBox}>
                  <div className={styles.label}>Audience Reached</div>
                  <div className={styles.number}>280k</div>
                </div>
              </div>
              <div className="col-6">
                <div className={styles.statBox}>
                  <div className={styles.label}>Projects Completed</div>
                  <div className={styles.number}>350+</div>
                </div>
              </div>
              <div className="col-6">
                <div className={styles.statBox}>
                  <div className={styles.label}>Awards</div>
                  <div className={styles.number}>25+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
