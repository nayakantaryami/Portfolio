import Section from "./Section";

const AchievementsSection = ({ achievements }) => (
  <Section title="Achievements">
    <div id="achievements" className="anchor" />
    {achievements.map((item) => (
      <article key={item.title} className="item no-split">
        <h3>{item.title}</h3>
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    ))}
  </Section>
);

export default AchievementsSection;
