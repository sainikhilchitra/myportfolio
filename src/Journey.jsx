import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Journey() {
  const experience = [
    {
      title: "Software Development Engineer (SDE Intern)",
      company: "Sentiantal Private Limited",
      location: "Hyderabad, Telangana",
      date: "Jan 2026",
      desc: [
        "Developed an analytics dashboard for organizations to visualize and monitor student performance metrics.",
        "Implemented role-based access control (RBAC) with secure authentication and authorization.",
        "Designed and built user management features including onboarding and profile management."
      ]
    },
    {
      title: "DSA Mentor",
      company: "Smart Interviews",
      location: "Hyderabad, Telangana",
      date: "Feb 2026",
      desc: [
        "Mentoring students in Data Structures and Algorithms through structured problem-solving sessions.",
        "Providing personalized guidance for technical interview preparation."
      ]
    }
  ];

  const education = [
    {
      title: "Bachelor of Technology",
      school: "B V Raju Institute of Technology",
      subtitle: "Computer Science and Engineering (Data Science)",
      date: "2023 - 2027",
      desc: ["CGPA: 8.92"]
    }
  ];

  return (
    <section className="journey" id="journey">
      <h2 className="section-title">My Journey</h2>
      <p className="section-subtitle">A timeline of my professional experience and academic background.</p>

      <div className="journey-container">
        <div className="journey-column">
          <h2><FontAwesomeIcon icon={faBriefcase} /> Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item glass-effect">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-subtitle">{exp.company} | {exp.location}</div>
                <ul className="timeline-desc">
                  {exp.desc.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="journey-column">
          <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item glass-effect">
                <div className="timeline-date">{edu.date}</div>
                <h3 className="timeline-title">{edu.title}</h3>
                <div className="timeline-subtitle">{edu.school}</div>
                <p className="timeline-subtitle" style={{color: 'var(--primary)', fontWeight: '600'}}>{edu.subtitle}</p>
                <div className="timeline-desc">
                  {edu.desc.map((item, i) => <p key={i}>{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
