import styles from "./Testimonials.module.css";
import sarahImg from "../../assets/images/Sarah Thompson.svg";
import wadeImg from "../../assets/images/Wade Warren.svg";
import lisaImg from "../../assets/images/Lisa Williams.svg";
import jenniferImg from "../../assets/images/Jennifer Lee.svg";

const testimonials = [
  {
    heading: "NexGen turned our business around!",
    text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Sarah Thompson",
    position: "CEO of BlueBloom",
    image: sarahImg,
  },
  {
    heading: "NexGen turned our business around!",
    text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Wade Warren",
    position: "Art Director",
    image: wadeImg,
  },
  {
    heading: "NexGen turned our business around!",
    text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Lisa Williams",
    position: "CEO Of HealthTech",
    image:  lisaImg,
  },
  {
    heading: "NexGen turned our business around!",
    text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Jennifer Lee",
    position: "COO of Foodie Haven",
    image:  jenniferImg ,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.testimonialContainer}>
        <h1>TETSTIMONIALS</h1>
        <div className={styles.allTestimonials}>
          <span className={styles.arrow}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 27 21"
              fill="none"
              aria-label="Diagonal arrow"
            >
              <defs>
                <marker
                  id="arrowHead"
                  markerWidth="6"
                  markerHeight="6"
                  refX="3"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                </marker>
              </defs>
              <line
                x1="6"
                y1="18"
                x2="18"
                y2="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                markerEnd="url(#arrowHead)"
              />
            </svg>
          </span>
          <h2 className={styles.allTestimonialsHeading}>ALL TESTIMONIALS</h2>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardBody}>
              <h2 className={styles.cardHeading}>{t.heading}</h2>
              <p className={styles.cardText}>{t.text}</p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardFooterInfo}>
                <span className={styles.cardFooterImage}>
                  <img src={t.image} alt={t.name} />
                </span>
                <div className={styles.cardFooterText}>
                  <h3 className={styles.cardFooterName}>{t.name}</h3>
                  <p className={styles.cardFooterPosition}>{t.position}</p>
                </div>
              </div>
              <span className={styles.cardArrow}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 27 21"
                  fill="none"
                  aria-label="Arrow right"
                >
                  <defs>
                    <marker
                      id="arrowHead"
                      markerWidth="6"
                      markerHeight="6"
                      refX="3"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                    </marker>
                  </defs>
                  <line
                    x1="4"
                    y1="10"
                    x2="22"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    markerEnd="url(#arrowHead)"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
