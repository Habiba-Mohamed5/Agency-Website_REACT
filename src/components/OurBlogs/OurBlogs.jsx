import React from "react";
import styles from "./OurBlogs.module.css";

import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import arrowBtn from "../../assets/images/Button.png";

const OurBlogs = () => {
  return (
    <section className={styles.ourBlogs}>
      {/* Header */}
      <div className={styles.containerOne}>
        <h1>OUR BLOGS</h1>
        <div className={styles.contentOne}>
          <p>BUSINESS</p>
          <p style={{ color: "black", backgroundColor: "#CE7D63" }}>DESIGN</p>
          <p>DEVELOPMENT</p>
        </div>
      </div>

      {/* Main blog */}
      <div className={styles.containerTwo}>
        <img className={styles.imgMain} src={img1} alt="Main Blog" />
        <div className={styles.contentTwo}>
          <h1>Web Design Trends Shaping 2024</h1>
          <p>
            Category <span className={styles.dot}></span>{" "}
            <span style={{ color: "aliceblue" }}>Design</span>
          </p>
          <p>
            Read Time <span className={styles.dot}></span>{" "}
            <span style={{ color: "aliceblue" }}>6 Mins</span>
          </p>
          <p>
            Author <span className={styles.dot}></span>{" "}
            <span style={{ color: "aliceblue" }}>Laura Turner</span>
          </p>
          <p style={{ color: "#B3B3B2", backgroundColor: "transparent" }}>
            Stay ahead of the design curve with insights into the latest web
            design trends. From immersive user experiences to bold color
            choices, explore the design elements that will dominate the digital
            landscape in 2023 and beyond.
          </p>
          <div className={styles.info}>
            <p>
              <img src={arrowBtn} width="40px" alt="arrow" />
              Read Full Blog
            </p>
            <p style={{ cursor: "text" }}>
              Published Date{" "}
              <span
                style={{
                  color: "white",
                  fontSize: "24px",
                  cursor: "text",
                }}
              >
                7th February 2023
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Other Blogs */}
      <div className={styles.containerThree}>
        <div className={styles.box}>
          <img className={styles.boxImg} src={img2} alt="Blog Image 1" />
          <div className={styles.boxContent}>
            <h1>Optimizing Mobile User Experience for Higher Conversions</h1>
            <p>
              Mobile devices dominate digital interactions, making mobile user
              experience crucial for conversion rates. Explore mobile design
              best practices...
            </p>
          </div>
          <button className={styles.readmore}>
            <img src={arrowBtn} alt="arrow" /> Read Full Blog
          </button>
        </div>

        <div className={styles.box}>
          <img className={styles.boxImg} src={img3} alt="Blog Image 2" />
          <div className={styles.boxContent}>
            <h1>Mastering the Art of Minimalistic Design</h1>
            <p>
              Simplicity and elegance take center stage in minimalistic design.
              Learn the principles of minimalism, how to effectively communicate
              with fewer elements...
            </p>
          </div>
          <button className={styles.readmore}>
            <img src={arrowBtn} alt="arrow" /> Read Full Blog
          </button>
        </div>

        <div className={styles.box}>
          <img className={styles.boxImg} src={img4} alt="Blog Image 3" />
          <div className={styles.boxContent}>
            <h1>The Psychology of Visual Design in Branding</h1>
            <p>
              Uncover the impact of visual elements in branding and how they
              influence customer perceptions and emotions. Explore color
              psychology, typography choices...
            </p>
          </div>
          <button className={styles.readmore}>
            <img src={arrowBtn} alt="arrow" /> Read Full Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
