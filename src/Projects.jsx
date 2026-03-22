import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  const projects = [
    {
      title: "CommitHub",
      description: "GitHub repository automation platform enabling file management via web interface without local cloning. Dual-auth architecture with GitHub OAuth and App integrations.",
      tech: ["Node.js", "Express", "MongoDB", "GitHub API"],
      git: "https://github.com/sainikhilchitra/commit-hub",
      demo: "https://commithub.vercel.app",
      image: "/CommitHub.png"
    },
    {
      title: "Trip Scheduler",
      description: "Smart travel planning platform with local, daily, and future trip management. Integrated Mapbox, OpenWeatherMap, and OpenTripMap APIs.",
      tech: ["React.js", "Node.js", "Mapbox", "REST APIs"],
      git: "https://github.com/sainikhilchitra/trip-scheduler",
      demo: "https://scheduleyourtrip.vercel.app",
      image: "/TripScheduler.png"
    },
    {
      title: "HealthKey",
      description: "A Digital Health Passport System for digitizing and managing patient medical records. Organizes health data visit-wise and generates concise summaries of medical reports to simplify record retrieval and clinical review.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      git: "https://github.com/sainikhilchitra/Health-Passport",
      demo: "https://health-1-0.onrender.com",
      image: "/HealthPassport.png"
    }
  ];


  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Selected Projects</h2>
      <p className="section-subtitle">A showcase of some of my most impactful development work.</p>

      <div className="project-items">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-effect">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.git} target="_blank" rel="noreferrer" className="project-link">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
