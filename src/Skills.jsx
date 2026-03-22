import { faCode, faServer, faLayerGroup, faTools } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJava, faJs, faReact, faNodeJs, faGitAlt, faDocker } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Skills() {
  const skillData = [
    {
      title: "Languages",
      icon: faCode,
      items: [
        { name: "Python", icon: faPython },
        { name: "Java", icon: faJava },
        { name: "C", icon: faCode },
        { name: "JavaScript", icon: faJs }
      ]
    },
    {
      title: "Frontend",
      icon: faLayerGroup,
      items: [
        { name: "React Js", icon: faReact },
        { name: "HTML/CSS", icon: faCode },
        { name: "Responsive UI", icon: faLayerGroup }
      ]
    },
    {
      title: "Backend",
      icon: faServer,
      items: [
        { name: "Node Js", icon: faNodeJs },
        { name: "Express Js", icon: faServer },
        { name: "MySQL", icon: faServer },
        { name: "MongoDB", icon: faServer }

      ]
    },
    {
      title: "Tools & Skills",
      icon: faTools,
      items: [
        { name: "Git/GitHub", icon: faGitAlt },
        { name: "Docker", icon: faDocker },
        { name: "DSA", icon: faCode },
        { name: "REST APIs", icon: faTools }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Technical Expertise</h2>
      <p className="section-subtitle">A comprehensive toolkit of technologies I use to bring ideas to life.</p>
      
      <div className="skill-types">
        {skillData.map((category) => (
          <div key={category.title} className="skill-type-items glass-effect">
            <div className="skill-header">
              <FontAwesomeIcon icon={category.icon} />
              <h3>{category.title}</h3>
            </div>
            <div className="skill-icons">
              {category.items.map((item) => (
                <div key={item.name} className="skill-element">
                  {item.icon && <FontAwesomeIcon icon={item.icon} />}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}