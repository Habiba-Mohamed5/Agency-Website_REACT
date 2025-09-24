import React, { useState, useRef, useEffect } from "react";
import styles from "./ContactSection.module.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("email");
  const phoneRef = useRef(null);

  useEffect(() => {
    if (phoneRef.current) {
      intlTelInput(phoneRef.current, {
        initialCountry: "in",
        preferredCountries: ["in", "us", "ae", "eg"],
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
      });
    }
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Left Tabs */}
        <div className="col-md-6">
          <div className={styles.contactBox}>
            <div className={styles.navPills}>
              <button
                className={`${styles.navLink} ${
                  activeTab === "phone" ? styles.navLinkActive : ""
                }`}
                onClick={() => setActiveTab("phone")}
              >
                Phone Number
              </button>
              <button
                className={`${styles.navLink} ${
                  activeTab === "email" ? styles.navLinkActive : ""
                }`}
                onClick={() => setActiveTab("email")}
              >
                Emails
              </button>
              <button
                className={`${styles.navLink} ${
                  activeTab === "office" ? styles.navLinkActive : ""
                }`}
                onClick={() => setActiveTab("office")}
              >
                Office Locations
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "phone" && (
                <div className={styles.tabPane}>
                  +91 98765 43210
                  <br />
                  +91 91234 56789
                </div>
              )}
              {activeTab === "email" && (
                <div className={styles.tabPane}>
                  <strong>General Inquiries:</strong> info@nexgen.com
                  <br />
                  <strong>Business Collab:</strong> partnerships@nexgen.com
                  <br />
                  <strong>Careers:</strong> careers@nexgen.com
                </div>
              )}
              {activeTab === "office" && (
                <div className={styles.tabPane}>
                  India Office: XYZ Street, Mumbai
                  <br />
                  USA: 123 Silicon Valley, California
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="col-md-6">
          <div className={styles.contactBox}>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className={styles.formLabel}>First Name</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.formLabel}>Last Name</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    className={styles.formControl}
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.formLabel}>Phone Number</label>
                  <div className={styles.phoneInputWrapper}>
                    <input
                      ref={phoneRef}
                      type="tel"
                      className={`form-control ${styles.phoneInput}`}
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className={styles.formLabel}>Message</label>
                  <textarea
                    className={styles.formControl}
                    rows="4"
                    placeholder="Enter your Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                    />
                    <label className="form-check-label" htmlFor="terms">
                      I agree with Terms of Use and Privacy Policy
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className={styles.btnCustom}>
                    SEND YOUR MESSAGE →
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
