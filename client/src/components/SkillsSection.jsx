import Section from "./Section";

const SkillsSection = ({ skills }) => (
  <Section title="Skills">
    <div id="skills" className="anchor" />
    <p>
      <strong>Languages:</strong> {skills.languages.join(", ")}
    </p>
    <p>
      <strong>Frameworks:</strong> {skills.frameworks.join(", ")}
    </p>
    <p>
      <strong>Tools:</strong> {skills.tools.join(", ")}
    </p>
  </Section>
);

export default SkillsSection;
