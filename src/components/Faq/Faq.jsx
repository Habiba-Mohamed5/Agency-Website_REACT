import React, { useState } from "react";
import styles from "./Faq.module.css";
import { CgArrowTopRight } from "react-icons/cg";

const faqData = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project’s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer:
      "Yes, we are capable of managing and delivering large-scale mobile app projects with robust architectures and scalable solutions.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "Absolutely! We have experience integrating a wide range of third-party APIs to enhance app functionalities.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer:
      "We use modern frameworks like Flutter and React Native to build apps that perform seamlessly across multiple platforms.",
  },
  {
    question: "What is your approach to user experience (UX) design?",
    answer:
      "We prioritize user-centered design, conducting thorough research and testing to ensure the final product is intuitive and engaging.",
  },
];

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFaq = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={`${styles.container} ${styles.faqContainer}`}>
        <div
          className={`${styles.sectionHeaderWrapper} d-flex justify-content-between align-items-center`}
        >
          <h2 className="section-heading has-border py-3 px-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <a href="#" className={`${styles.viewAllLink} px-3`}>
            <CgArrowTopRight size={45} className={ ` ${styles.i} px-2`} /> VIEW ALL
          </a>
        </div>

        <div className="row">
          {/* LEFT SIDE FAQ LIST */}
          <div className="col-md-7">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqCard} ${
                  openIndexes.includes(index) ? styles.active : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon}></span>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    openIndexes.includes(index) ? styles.open : ""
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-md-5">
            <div className={styles.faqForm}>
              <h6 className="mb-3">ASK YOUR QUESTION</h6>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
              />
              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Enter Your Question Here ....."
              ></textarea>
              <button>SEND YOUR MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
