import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const Section = ({ title, children }) => (
  <section className="card">
    <h2>{title}</h2>
    {children}
  </section>
);

function App() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/portfolio`)
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((error) => console.error("Failed to load portfolio:", error));
  }, []);

  if (!portfolio) {
    return (
      <main className="container loading">
        <p>Loading portfolio...</p>
      </main>
    );
  }

  const { basics, education, coursework, experience, projects, achievements, skills, extracurricular } = portfolio;

  return (
    <main className="container">
      <header className="hero card">
        <p className="eyebrow">Portfolio</p>
        <h1>{basics.name}</h1>
        <div className="links">
          <a href={`tel:${basics.phone}`}>{basics.phone}</a>
          <a href={`mailto:${basics.email}`}>{basics.email}</a>
          <a href={basics.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={basics.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={basics.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </header>

      <Section title="Education">
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

      <Section title="Relevant Coursework">
        <ul className="chip-list">
          {coursework.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </Section>

      <Section title="Work Experience">
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

      <Section title="Projects">
        {projects.map((item) => (
          <article key={item.title} className="item">
            <div>
              <h3>{item.title}</h3>
              <p className="subtitle">{item.stack.join(" · ")}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a href={item.github} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
            <p className="meta">{item.period}</p>
          </article>
        ))}
      </Section>

      <Section title="Achievements & Certifications">
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

      <Section title="Technical Skills">
        <p><strong>Languages:</strong> {skills.languages.join(", ")}</p>
        <p><strong>Frameworks/Libraries:</strong> {skills.frameworks.join(", ")}</p>
        <p><strong>Tools:</strong> {skills.tools.join(", ")}</p>
      </Section>

      <Section title="Extra Curricular">
        <article className="item">
          <div>
            <h3>{extracurricular.title}</h3>
            <ul>
              {extracurricular.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <p className="meta">{extracurricular.period}</p>
        </article>
      </Section>
    </main>
  );
}

export default App;
