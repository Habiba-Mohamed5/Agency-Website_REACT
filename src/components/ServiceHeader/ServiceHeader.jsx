import styles from "./ServiceHeader.module.css";
import headerImg from "../../assets/images/service/sub Container (1).png";

const ServiceHeader = () => {
  const tags = [
    "MARKETING",
    "WEBSITE DESIGN",
    "BRANDING",
    "WEBSITE DEVELOPMENT",
    "MOBILE APP DEVELOPMENT",
    "DIGITAL",
  ];

  return (
    <div className={styles.header}>
      {/* Title + Content */}
      <div className={styles.title}>
        <h3>
          Our Comprehensive
          {/* Arrow SVG */}
          <svg
            className={styles.rightArrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            width="70"
            height="70"
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#CE7D63"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="240 90"
              strokeDashoffset="295"
            />
            <circle cx="60" cy="60" r="32" fill="#CE7D63" />
            <line
              x1="44"
              y1="60"
              x2="70"
              y2="60"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <polyline
              points="61,50 74,60 61,72"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.start}>START A PROJECT</span>
          <br />
          Digital Solutions
        </h3>

        <p>
          At NexGen, we offer a comprehensive suite of digital solutions
          designed to propel your business to new heights in the digital realm.
          With a team of skilled professionals, cutting-edge technologies, and a
          passion for innovation
        </p>

        {/* Tags */}
        <div className={styles.tags} aria-hidden="false">
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <img className={styles.headImg} src={headerImg} alt="header" />
    </div>
  );
};

export default ServiceHeader;
