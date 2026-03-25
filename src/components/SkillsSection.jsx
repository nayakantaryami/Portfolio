import Section from "./Section";
const SkillsSection = ({ skills }) => (
  <Section title="Capabilities" subtitle="Technical arsenal">
    <div id="skills" className="anchor" />
    <div className="skills-grid">
      <article className="skill-group">
        <h3>Languages</h3>
        <div className="chip-row">
          {skills.languages.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </article>
      <article className="skill-group">
        <h3>Frameworks</h3>
        <div className="chip-row">
          {skills.frameworks.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </article>
      <article className="skill-group">
        <h3>Tools</h3>
        <div className="chip-row">
          {skills.tools.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </article>
    </div>
  </Section>
);
export default SkillsSection;
