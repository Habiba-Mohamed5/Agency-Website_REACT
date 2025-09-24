import React, { useState } from "react";
import styles from "./HowToApply.module.css";
import ApplyModal from "./ApplyModal";

const steps = [
  {
    step: "Step 01",
    title: "Explore Job Listings",
    text: `Visit our website's "Careers" page to explore the current job listings.`,
    details: `Review the various roles available and select the position that aligns with your skills, 
              experience, and career aspirations.`,
  },
  {
    step: "Step 02",
    title: "Review Job Description",
    text: `Click on the desired job title to view the detailed job description.`,
    details: `Take your time to read through the responsibilities, requirements, 
              and qualifications to ensure you have a clear understanding of the role.`,
  },
  {
    step: "Step 03",
    title: "Prepare Your Application",
    text: `Before applying, ensure you have the following ready.`,
    details: `A well-structured CV, cover letter tailored to the role, and any supporting documents.`,
  },
  {
    step: "Step 04",
    title: "Complete the Application",
    text: `Click the "Apply Now" button on the job listing page to access our online application form.`,
    details: `Fill in your personal information, contact details, and the position you are applying for.`,
  },
  {
    step: "Step 05",
    title: "Upload Your Documents",
    text: `Attach your resume, cover letter, and portfolio (if applicable).`,
    details: `Make sure the documents are up-to-date and in supported formats (PDF/DOC).`,
  },
  {
    step: "Step 06",
    title: "Submit Your Application",
    text: `Double-check all the information you provided.`,
    details: `Once you are satisfied with your application, click the "Submit" button to send it to our HR team.`,
  },
  {
    step: "Step 07",
    title: "Application Review",
    text: `After the application deadline, our HR team will carefully review all applications.`,
    details: `Shortlisted candidates will be contacted for further evaluation, which may include interviews and assessments.`,
  },
  {
    step: "Step 08",
    title: "Interview Process",
    text: `If you are selected for an interview, we will reach out to schedule a suitable date and time.`,
    details: `Interviews may be conducted in-person or virtually, depending on the position and your location.`,
  },
];

const HowToApply = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <section id="howToApply">
      <div className={styles.containerBox}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>HOW TO APPLY</h1>
        </div>

        <div className={styles.row}>
          {steps.map((s, i) => (
            <div key={i} className={styles.applyCard}>
              <div className={styles.applyCardBody}>
                <p className={styles.step}>{s.step}</p>
              </div>
              <h5 className={styles.cardTitle}>{s.title}</h5>
              <div className={styles.applyCardFooter}>
                <p className={styles.cardText}>{s.text}</p>
                <div
                  className={styles.knowMoreLink}
                  onClick={() => setSelectedStep(s)}
                >
                  <div className={styles.knowCircle}>
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
                    >
                      <line x1="12" y1="4" x2="12" y2="20" />
                      <polyline points="6 14 12 20 18 14" />
                    </svg>
                  </div>
                  KNOW MORE
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStep && (
        <ApplyModal step={selectedStep} onClose={() => setSelectedStep(null)} />
      )}
    </section>
  );
};

export default HowToApply;
