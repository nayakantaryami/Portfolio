import Section from "./Section";
const ExperienceSection = ({ experience }) => (
  <Section title="Experience" subtitle="Impact">
    <div id="experience" className="anchor" />
    <div className="timeline">
      {experience.map((item) => (
        <article key={item.role} className="timeline-item">
          <div>
            <h3>{item.role}</h3>
            <p className="subtitle">{item.organization}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <p className="meta">{item.period}</p>
        </article>
      ))}
    </div>
  </Section>
);
export default ExperienceSection;
