import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  const projects = [
    {
      title: "Real-Time Video Anomaly Detection",
      description: "Built a full-stack surveillance platform for real-time anomaly detection on live and recorded video streams. Designed a frame-level inference pipeline to generate anomaly scores and trigger real-time alerts. Developed an interactive dashboard for anomaly monitoring, history tracking, and user-based validation.",
      tech: ["React.js", "PostgreSQL", "Python", "PyTorch", "FastAPI"],
      git: "#",
      demo: "#",
      image: "/videoAnomaly.png"
    },
    {
      title: "CommitHub",
      description: "Built a full-stack repository automation platform with GitHub OAuth and GitHub App integration. Developed a 16-endpoint REST API backend for automated commit messages, PR descriptions, and code review workflows.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub API"],
      git: "https://github.com/sainikhilchitra/commit-hub",
      demo: "https://commithub.vercel.app",
      image: "/CommitHub.png"
    },
    {
      title: "StockStream",
      description: "Built a cloud-native platform to process live stock and cryptocurrency market data using WebSocket streams. Designed an event-driven pipeline using GCP Pub/Sub, Cloud Functions, and BigQuery for scalable real-time analytics. Developed ML-based price forecasting and visualized live insights through a React dashboard.",
      tech: ["GCP", "BigQuery", "React.js", "Node.js", "BigQuery ML"],
      git: "#",
      demo: "#",
      image: "/stockStream.png"
    },
    {
      title: "Trip Scheduler",
      description: "Smart travel planning platform with local, daily, and future trip management. Integrated Mapbox, OpenWeatherMap, and OpenTripMap APIs.",
      tech: ["React.js", "Node.js", "Mapbox", "REST APIs"],
      git: "https://github.com/sainikhilchitra/trip-scheduler",
      demo: "https://scheduleyourtrip.vercel.app",
      image: "/TripScheduler.png"
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
