import React, { useState } from "react";
import styles from "./OurSevices.module.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import icon1 from "../../assets/images/service/Icon Container (3).png";
import icon2 from "../../assets/images/service/Icon Container (2).png";
import icon3 from "../../assets/images/service/Icon Container (1).png";
import icon4 from "../../assets/images/service/Icon Container.png";

import c1 from "../../assets/images/service/Container1.png";
import c11 from "../../assets/images/service/Container11.png";
import c2 from "../../assets/images/service/Container (2).png";
import c22 from "../../assets/images/service/Container (22).png";
import c3 from "../../assets/images/service/Container (3).png";
import c33 from "../../assets/images/service/Container (33).png";
import c4 from "../../assets/images/service/Container (4).png";

const OurServices = () => {
  const initialServices = [
    {
      id: 1,
      title: "WEB DESIGN",
      icon: icon1,
      desc: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
      price: "STARTS FROM $1,500",
      projectsTitle: "WEB DESIGN",
      images: [c1, c11],
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: icon2,
      desc: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
      price: "Starts From $2,500",
      projectsTitle: "Mobile App Development Projects",
      images: [c2, c22],
    },
    {
      id: 3,
      title: "Web Development",
      icon: icon3,
      desc: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
      price: "STARTS FROM $1,800",
      projectsTitle: "Web Development Projects",
      images: [c3, c33],
    },
    {
      id: 4,
      title: "Digital Marketing",
      icon: icon4,
      desc: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
      price: "STARTS FROM $1,500",
      projectsTitle: "Digital Marketing Projects",
      images: [c4, c33],
    },
  ];

  const [services, setServices] = useState(initialServices);

  const fetchApiData = () => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices((prev) => [...prev, ...data]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className={styles.services}>
      <button onClick={fetchApiData} className={styles.addBtn}>
        Fetch Services From Local API
      </button>

      <div className={styles.servicesContainer}>
        <div className={`${styles.serviceBox} ${styles.titleBox}`}>
          <h2>OUR SERVICES</h2>
        </div>

        {services.map((service) => (
          <React.Fragment key={service.id}>
            <div className={`${styles.serviceBox} ${styles.textBox}`}>
              <div className={styles.serviceInfo}>
                <img src={service.icon} alt={service.title} />
                <div className={styles.serviceTitle}>{service.title}</div>
                <div className={styles.serviceBtn}>
                  <a href="#" className={styles.arrowLink}>
                    <FaArrowUpRightFromSquare />
                  </a>
                  <span className={styles.bookSpan}>BOOK A CALL</span>
                </div>
              </div>
              <div className={styles.serviceActions}>
                <div className={styles.serviceDesc}>{service.desc}</div>
              </div>
              <div className={styles.price}>{service.price}</div>
            </div>

            <div className={`${styles.serviceBox} ${styles.imageBox}`}>
              <div className={styles.servImgTitle}>
                <div className={styles.serviceImgTitle}>
                  {service.projectsTitle}
                </div>
                <div className={styles.serviceBtn}>
                  <a href="#" className={styles.arrowLink}>
                    <FaArrowUpRightFromSquare />
                  </a>
                  <span className={styles.bookSpan}>BOOK A CALL</span>
                </div>
              </div>

              <div className={styles.servImg}>
                {service.images.map((img, i) => (
                  <div key={i} className={styles.servImgItem}>
                    <img src={img} alt={service.title} />
                    <div className={styles.imgOverlayText}>
                      <a href="#" className={styles.arrowLink}>
                        <FaArrowUpRightFromSquare />
                      </a>
                      <span>OPEN PROJECT</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurServices;