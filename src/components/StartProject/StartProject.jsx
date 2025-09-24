import React from "react";
import styles from "./StartProject.module.css";

export default function StartProject() {
  return (
    <section id="startProject">
      <div className="container-fluid py-5 px-0">
        <div className="row g-4">
          {/* Left Box */}
          <div className="col-md-8">
            <div className={`${styles.cardLeftBox} h-100`}>
              <div className={styles.mainHeading}>
                <span>UNLOCK YOUR POTENTIAL</span>
                <a href="#" className={styles.startProjectLink}>
                  <div className={styles.projectCircleContainer}>
                    <div className={styles.projectCircleOuter}></div>
                    <div className={styles.projectCircleInner}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <polyline points="14 6 20 12 14 18" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  START A PROJECT
                </a>
              </div>
              <h1 className={`${styles.mainHeading} mt-3`}>
                IN THE DIGITAL WORLD
              </h1>
            </div>
          </div>

          {/* Right Box */}
          <div className="col-md-4">
            <div className={`${styles.cardRightBox} h-100`}>
              <h2 className={styles.aboutHeading}>AT NEXGEN</h2>
              <p className={styles.aboutText}>
                We believe in fostering a dynamic and collaborative work
                environment that empowers our team members to excel in their
                respective fields. Join us to be part of a passionate and
                innovative team dedicated to crafting exceptional digital
                solutions for clients across the globe.
              </p>
              <a href="#" className={styles.knowMoreLink}>
                <div className={styles.knowCircle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <polyline points="6 14 12 20 18 14" />
                  </svg>
                </div>
                KNOW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
