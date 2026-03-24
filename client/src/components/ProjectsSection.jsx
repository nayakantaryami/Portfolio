import Section from "./Section";
const ProjectsSection = ({ projects }) => (
  <Section title="Projects" subtitle="Selected Work">
    <div id="projects" className="anchor" />
    <div className="projects-grid">
      {projects.map((item) => (
        <article key={item.title} className="project-card">
          <div className="project-meta">
            <span className="project-period">{item.period}</span>
            <span className="project-type">{item.stack[0]}</span>
          </div>
          <h3>{item.title}</h3>
          <p className="project-summary">{item.bullets[0]}</p>
          <div className="project-tags">
            {item.stack.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <a className="project-cta" href={item.github} target="_blank" rel="noreferrer">
            View Project
          </a>
        </article>
      ))}
    </div>
  </Section>
);
export default ProjectsSection;
