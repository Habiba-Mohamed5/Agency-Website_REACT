import { useState } from "react";
import styles from "./JoinOurTeam.module.css";

const jobs = [
  {
    title: "WEB DESIGNER",
    salary: "$45,000 - $60,000 per year",
    experience: "1+ years",
    deadline: "30/09/2025",
    skills:
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
    details:
      "As a Web Designer, you will collaborate with developers and product managers to create engaging and user-friendly web experiences. You should be comfortable working with wireframes, mockups, and final designs.",
  },
  {
    title: "MOBILE APP DEVELOPER",
    salary: "$55,000 - $75,000 per year",
    experience: "2+ years",
    deadline: "15/10/2025",
    skills:
      "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
    details:
      "You will design and build mobile applications for iOS/Android. A strong understanding of APIs and mobile UI is required, with experience in publishing apps to app stores.",
  },
  {
    title: "DIGITAL MARKETING SPECIALIST",
    salary: "$50,000 - $65,000 per year",
    experience: "3+ years",
    deadline: "20/11/2025",
    skills:
      "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.",
    details:
      "Your role will focus on boosting brand awareness and lead generation through digital campaigns, SEO strategies, and social media management.",
  },
  {
    title: "PROJECT MANAGER",
    salary: "$60,000 - $80,000 per year",
    experience: "5+ years",
    deadline: "05/12/2025",
    skills:
      "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
    details:
      "As Project Manager, you will coordinate teams, manage deadlines, and oversee project lifecycles. Prior experience in Agile or Scrum is a plus.",
  },
];

export default function JoinOurTeam() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section id="joinOurTeam">
      <div className={styles.containerBox}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>JOIN OUR TEAM AT NEXGEN</h1>
        </div>

        <div className="row mt-2 g-4">
          {jobs.map((job, index) => (
            <div key={index} className="col-12 col-lg-6">
              <div className={styles.card}>
                <div className="card-body">
                  <div className={styles.box}>
                    <h5 className={styles.cardTitle}>{job.title}</h5>
                    <div
                      className={styles.boxDetails}
                      onClick={() => setSelectedJob(job)}
                    >
                      <div className={styles.boxArrow}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="arrow-icon feather feather-arrow-right"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                      <p>VIEW DETAILS</p>
                    </div>
                  </div>

                  <div className={styles.requirement}>
                    <div>
                      <p>
                        Salary: <span>{job.salary}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Experience: <span>{job.experience}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Deadline: <span>{job.deadline}</span>
                      </p>
                    </div>
                  </div>

                  <h6 className={styles.cardSubtitle}>SKILLS</h6>
                  <p className={styles.cardText}>{job.skills}</p>
                  <a href="#" className={styles.cardLink}>
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedJob && (
        <div className={styles.modalOverlay} onClick={() => setSelectedJob(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedJob.title}</h2>
            <p>
              <strong>Salary:</strong> {selectedJob.salary}
            </p>
            <p>
              <strong>Experience:</strong> {selectedJob.experience}
            </p>
            <p>
              <strong>Deadline:</strong> {selectedJob.deadline}
            </p>
            <h4>Skills Required</h4>
            <p>{selectedJob.skills}</p>
            <h4>Job Description</h4>
            <p>{selectedJob.details}</p>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedJob(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
