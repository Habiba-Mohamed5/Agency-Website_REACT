import styles from "./GetInTouch.module.css";

const GetInTouch = () => {
  return (
    <section className="mt-5">
      <div className={`container-fluid ${styles.mainContainer} px-4`}>
        <div className="row g-4">
          {/* Left Box */}
          <div className="col-lg-8">
            <div className={styles.leftBox}>
              <div className={styles.headline}>
                <div className={styles.headlineTop}>
                  GET IN TOUCH
                  <button
                    className={styles.startBtn}
                    aria-label="start project"
                  >
                    <span className={styles.circle} aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        width="18"
                        height="18"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <polyline points="14 6 20 12 14 18" />
                      </svg>
                    </span>
                    START A PROJECT
                  </button>
                </div>
                WITH US TODAY!
              </div>

              <p>
                At NexGen, we value your inquiries, feedback, and
                collaborations. Whether you are interested in our digital
                services, have questions about our projects, or want to explore
                potential partnerships, we encourage you to reach out to our
                dedicated team.
              </p>

              <div className={styles.tags}>
                <span>MARKETING</span>
                <span>WEBSITE DESIGN</span>
                <span>BRANDING</span>
                <span>WEBSITE DEVELOPMENT</span>
                <span>MOBILE APP DEVELOPMENT</span>
                <span>DIGITAL</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            <div className="row g-3">
              {[
                { number: "200+", label: "Clients" },
                { number: "280+", label: "Projects" },
                { number: "100%", label: "Happy Clients" },
                { number: "420K", label: "Followers" },
                { number: "10+", label: "Years" },
                { number: "↓", label: "Reach Us" },
              ].map((stat, i) => (
                <div className="col-6" key={i}>
                  <div className={styles.statCard}>
                    <h2>{stat.number}</h2>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
