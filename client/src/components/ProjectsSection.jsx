import Section from "./Section";

const ProjectsSection = ({ projects }) => (
  <Section title="Projects">
    <div id="projects" className="anchor" />
    {projects.map((item) => (
      <article key={item.title} className="item">
        <div>
          <h3>{item.title}</h3>
          <p className="subtitle">{item.stack.join(" | ")}</p>
          <ul>
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <a href={item.github} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
        <p className="meta">{item.period}</p>
      </article>
    ))}
  </Section>
);

export default ProjectsSection;
