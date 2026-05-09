import { faBriefcase, faGraduationCap, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Journey() {
  const experience = [
    {
      title: "Software Development Engineer Intern",
      company: "Sentiantal Private Limited",
      location: "Hyderabad, Telangana",
      date: "Jan - May 2026",
      desc: [
        "Built backend systems with role-based access control (RBAC) for secure admin and branch-level data management.",
        "Developed analytics dashboards for student performance tracking and automated evaluation workflows.",
        "Designed an LLM-based resume parsing pipeline for automated candidate data extraction and processing.",
        "Optimized HR interview workflows and resolved critical evaluation pipeline issues to improve system stability.",
      ],
      tech: ["React.js", "Node.js", "System Design", "LLMs"],
    },
    {
      title: "DSA Mentor",
      company: "Smart Interviews",
      location: "Hyderabad, Telangana",
      date: "Feb 2026",
      desc: [
        "Mentored students in Data Structures & Algorithms through structured problem-solving guidance.",
      ],
      tech: ["Algorithms", "Problem Solving", "Mentorship", "C/Java"],
    },
  ];

  const education = [
    {
      title: "Bachelor of Technology",
      school: "B V Raju Institute of Technology",
      subtitle: "Computer Science & Engineering (Data Science)",
      date: "2023 – 2027",
      desc: ["CGPA: 8.92"],
      tech: ["Data Science", "AI/ML", "DSA"],
    },
  ];

  return (
    <section className="journey" id="journey">
      <h2 className="section-title">My Journey</h2>
      <p className="section-subtitle">
        A timeline of my professional experience and academic background.
      </p>

      <div className="journey-container">
        {/* ── Experience Column ── */}
        <div className="journey-column">
          <div className="journey-col-header">
            <div className="journey-col-icon exp-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <h3 className="journey-col-title">Experience</h3>
          </div>

          <div className="v-timeline">
            {experience.map((exp, index) => (
              <div key={index} className="v-timeline-item">
                <div className="v-dot" />
                <div className="v-card glass-effect">
                  <div className="v-card-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{exp.date}</span>
                  </div>
                  <h4 className="v-card-title">{exp.title}</h4>
                  <div className="v-card-sub">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>
                      {exp.company} &middot; {exp.location}
                    </span>
                  </div>
                  <ul className="v-card-list">
                    {exp.desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="v-card-tags">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education Column ── */}
        <div className="journey-column">
          <div className="journey-col-header">
            <div className="journey-col-icon edu-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <h3 className="journey-col-title">Education</h3>
          </div>

          <div className="v-timeline">
            {education.map((edu, index) => (
              <div key={index} className="v-timeline-item">
                <div className="v-dot edu-dot" />
                <div className="v-card glass-effect">
                  <div className="v-card-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{edu.date}</span>
                  </div>
                  <h4 className="v-card-title">{edu.title}</h4>
                  <div className="v-card-sub">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{edu.school}</span>
                  </div>
                  <p className="v-card-spec">{edu.subtitle}</p>
                  {edu.desc.map((item, i) => (
                    <p key={i} className="v-card-cgpa">
                      {item}
                    </p>
                  ))}
                  <div className="v-card-tags">
                    {edu.tech.map((t, i) => (
                      <span key={i} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
