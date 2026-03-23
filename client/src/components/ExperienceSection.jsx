import Section from "./Section";

const ExperienceSection = ({ experience }) => (
  <Section title="Experience">
    <div id="experience" className="anchor" />
    {experience.map((item) => (
      <article key={item.role} className="item">
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
  </Section>
);

export default ExperienceSection;
