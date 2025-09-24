import React from "react";
import styles from "./Reasons.module.css";

const reasonsData = [
  {
    title: "EXPERTISE IN CUTTING-EDGE TECHNOLOGIES",
    desc: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
    link: "#",
  },
  {
    title: "PROVEN TRACK RECORD OF SUCCESS",
    desc: "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
    link: "#",
  },
  {
    title: "CLIENT-CENTRIC APPROACH",
    desc: "At NexGen, we prioritize understanding our clients’ unique requirements, fostering transparent communication throughout the development process.",
    link: "#",
  },
  {
    title: "DEDICATED TEAM OF PROFESSIONALS",
    desc: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
    link: "#",
  },
];

export default function Reasons() {
  return (
    <section id="reasons">
      <div className={styles.section}>
        <h2>REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY</h2>
        <div className={styles.cards}>
          {reasonsData.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
              <a href={reason.link} className={styles.learnMore}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
