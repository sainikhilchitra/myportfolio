export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Bridging the gap between complex backend logic and intuitive frontend design.
      </p>
      
      <div className="about-content">
        <div className="about-card glass-effect">
          <h3>My Journey</h3>
          <p>
            I'm a Computer Science graduate with a deep passion for building 
            impactful software. My journey in tech is driven by a curiosity 
            to understand how systems work and a desire to create seamless 
            digital experiences.
          </p>
        </div>
        <div className="about-card glass-effect">
          <h3>My Approach</h3>
          <p>
            I believe in writing clean, maintainable code and always 
            prioritizing the end-user. Whether it's architecting a 
            robust API or crafting a responsive UI, I strive for 
            excellence in every line of code.
          </p>
        </div>
      </div>
    </section>
  );
}