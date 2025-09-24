import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaArrowRight,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <section id="footer" className={styles.footer}>
        {/* Title Section */}
        <div className={`${styles.footerTitle} container-fluid`}>
          <h1 className={styles.footerHeading}>
            Ready to Transform Your Digital Presence?
          </h1>
          <div className={styles.footerContent}>
            <p className={styles.footerText}>
              Take the first step towards digital success with NexGen by your
              side. Our team of experts is eager to craft tailored solutions
              that drive growth for your business.
            </p>
            <a className={styles.footerLink} href="/contact">
              Get in Touch <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Marquee Section */}
        <div className={styles.marquee}>
          <div className={styles.track}>
            {Array(120)
              .fill("Follow Us on Social Media")
              .map((text, i) => (
                <p key={i}>
                  <span>{text}</span>
                  <i className={styles.dot}></i>
                </p>
              ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="container-fluid my-5">
          <div className="row g-4">
            {/* Left Column (Social Cards) */}
            <div className="col-12 col-lg-4">
              <div className="row g-4">
                {[
                  {
                    icon: <FaInstagram />,
                    title: "INSTAGRAM",
                    text: "Share visually appealing snippets of our latest web projects.",
                  },
                  {
                    icon: <FaTwitter />,
                    title: "TWITTER",
                    text: "Tweet about interesting coding challenges you've overcome.",
                  },
                  {
                    icon: <FaDribbble />,
                    title: "DRIBBBLE",
                    text: "Showcase design elements of our web projects.",
                  },
                  {
                    icon: <FaBehance />,
                    title: "BEHANCE",
                    text: "Create detailed presentations for our projects.",
                  },
                ].map((item, index) => (
                  <div className="col-12 col-md-6" key={index}>
                    <div className={`${styles.card} p-4 h-100`}>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className={styles.footerIcon}>{item.icon}</div>
                        <a
                          title="Close"
                          href="#"
                          className={`${styles["btn-icon"]} btn p-3`}
                        >
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
                            className="text-white"
                          >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      </div>
                      <h2 className="fs-3 fw-bold text-white">{item.title}</h2>
                      <p className={styles["text-custom-gray-1"]}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Links + Newsletter + Footer bottom) */}
            <div className="col-12 col-lg-8">
              <div className="row g-4 h-100">
                {/* Links */}
                <div className="col-12">
                  <div className={`${styles.card} p-4 h-100`}>
                    <div className="row g-3">
                      {[
                        {
                          heading: "Home",
                          links: ["Why Us", "About Us", "Testimonials", "FAQ's"],
                        },
                        {
                          heading: "Services",
                          links: [
                            "Web Development",
                            "App Development",
                            "Web Design",
                            "Digital Marketing",
                          ],
                        },
                        {
                          heading: "Projects",
                          links: ["Klothink", "Zenith", "Novus", "Apex"],
                        },
                        {
                          heading: "Blogs",
                          links: ["Business", "Design Soon", "Development Soon"],
                        },
                      ].map((col, i) => (
                        <div className="col-6 col-lg-3" key={i}>
                          <h3 className="fs-5 fw-bold text-white mb-3">
                            {col.heading}
                          </h3>
                          <ul className="list-unstyled">
                            {col.links.map((link, idx) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className={`${styles["text-custom-gray-1"]} text-decoration-none`}
                                >
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="col-12">
                  <div
                    className={`${styles.card} p-4 d-flex flex-column justify-content-between`}
                  >
                    <div className="d-flex justify-content-sm-between align-items-center">
                      <div className="text-start">
                        <p
                          className={`${styles["text-custom-gray-1"]} fw-bold text-uppercase tracking-wider d-block mb-2`}
                        >
                          Newsletter
                        </p>
                        <h2 className={`${styles.h2Width} fs-3 fw-bold text-white mb-4`}>
                          SUBSCRIBE TO OUR NEWSLETTER
                        </h2>
                      </div>
                      <div className={`${styles.inputWidth} input-group`}>
                        <div className="form-floating d-flex justify-content-end align-items-center">
                          <input
                            type="email"
                            className={`${styles["form-control"]} form-control`}
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput" className={styles.label} >Email address</label>
                          <button
                            title="Subscribe"
                            type="submit"
                            className={`${styles["btn-newsletter"]} btn ${styles["btn-icon"]} p-3 ms-2 rounded-circle`}
                          >
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
                              className="text-white"
                            >
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Bottom */}
                <div className="col-12 mt-4">
                  <div
                    className={`${styles.card} ${styles.footerPart} px-4 d-flex flex-column flex-md-row justify-content-between align-items-center`}
                  >
                    <p
                      className={`${styles["text-custom-gray-1"]} text-center text-md-start mb-2 mb-md-0`}
                    >
                      &copy; 2024 NexGen. All rights reserved.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center">
                      <a
                        href="#"
                        className={`${styles["text-custom-gray-1"]} text-decoration-none mx-2`}
                      >
                        Terms & Conditions
                      </a>
                      <a
                        href="#"
                        className={`${styles["text-custom-gray-1"]} text-decoration-none mx-2`}
                      >
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
