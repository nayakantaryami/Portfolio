import Section from "./Section";

const EducationSection = ({ education }) => (
  <Section title="Education">
    <div id="education" className="anchor" />
    {education.map((item) => (
      <article key={`${item.institution}-${item.period}`} className="item">
        <div>
          <h3>{item.institution}</h3>
          <p className="subtitle">{item.degree}</p>
          <p>{item.details}</p>
        </div>
        <div className="meta">
          <p>{item.period}</p>
          <p>{item.location}</p>
        </div>
      </article>
    ))}
  </Section>
);

export default EducationSection;
