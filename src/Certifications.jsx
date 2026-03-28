import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Certifications() {
  const achievements = [
    {
      title: "Hackathon Runner-up",
      desc: "DataScix National Hackathon 2026.",
      icon: "🥈"
    },
    {
      title: "Smart Coder Diamond",
      desc: "Diamond Certificate (1100/50k).",
      icon: "💎"
    }
  ];

  const certificates = [
    {
      title: "Machine Learning",
      issuer: "IIT Madras",
      date: "April 2025"
    },
    {
      title: "DSA using Java",
      issuer: "IIT Kharagpur",
      date: "October 2024",
      note: "Top 5%"
    },
    {
      title: "Programming in C",
      issuer: "IIT Kharagpur",
      date: "April 2024"
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <h2 className="section-title">Achievements & Certifications</h2>
      <p className="section-subtitle">A testament to my continuous learning and competitive programming journey.</p>

      <div className="achievements-list">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-item glass-effect">
            <div className="achievement-icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="certs-grid" style={{marginTop: '40px'}}>
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card glass-effect">
            <div style={{color: 'var(--primary)', fontSize: '1.5rem'}}><FontAwesomeIcon icon={faCertificate} /></div>
            <h3>{cert.title}</h3>
            <p style={{color: 'var(--text-muted)'}}>{cert.issuer} | {cert.date}</p>
            {cert.note && <span className="tech-tag" style={{width: 'fit-content'}}>{cert.note}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}