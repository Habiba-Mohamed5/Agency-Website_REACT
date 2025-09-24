
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import styles from "./ServicesSection.module.css";
import webDesignIcon from "../../assets/images/service/Icon Container (3).png";
import mobileAppIcon from "../../assets/images/service/Icon Container (2).png";
import webDevIcon from "../../assets/images/service/Icon Container (1).png";
import marketingIcon from "../../assets/images/service/Icon Container.png";

const servicesData = [
  {
    img: webDesignIcon,
    title: "Web Design",
    desc: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
    price: "Starts from $1,500",
  },
  {
    img: mobileAppIcon,
    title: "Mobile App Development",
    desc: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
    price: "Starts from $2,500",
  },
  {
    img: webDevIcon,
    title: "Web Development",
    desc: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
    price: "Starts from $1,800",
  },
  {
    img: marketingIcon,
    title: "Digital Marketing",
    desc: "Our Digital Marketing service helps you grow your online presence and reach your target audience effectively.",
    price: "Starts from $1,500",
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.servicesContainer}>
        {/* Title */}
        <div className={`${styles.serviceBox} ${styles.titleBox}`}>
          <h2>OUR SERVICES</h2>
        </div>

        {/* Services */}
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceBox}>
            <div className={styles.serviceInfo}>
              <img src={service.img} alt={service.title} />
              <div className={styles.serviceTitle}>{service.title}</div>
              <div className={styles.serviceBtn}>
                <a href="#" className={styles.arrowLink}>
                  <FaArrowUpRightFromSquare className={styles.serviceIcon} />
                </a>
                <span className={styles.bookSpan}>Book a Call</span>
              </div>
            </div>

            <div className={styles.serviceActions}>
              <div className={styles.serviceDesc}>{service.desc}</div>
            </div>

            <div className={styles.price}>{service.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
