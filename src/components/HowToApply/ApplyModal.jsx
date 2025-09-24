import React from "react";
import styles from "./ApplyModal.module.css";

const ApplyModal = ({ step, onClose }) => {
  if (!step) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.modalTitle}>{step.title}</h2>
        <p className={styles.modalStep}>{step.step}</p>
        <p className={styles.modalText}>{step.details}</p>
      </div>
    </div>
  );
};

export default ApplyModal;
