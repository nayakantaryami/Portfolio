import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const getRoute = () => window.location.hash.replace("#", "") || "/";

const sections = [
  { label: "Home", route: "/" },
  { label: "Projects", route: "/projects" },
  { label: "Education", route: "/education" },
  { label: "Experience", route: "/experience" },
  { label: "Skills", route: "/skills" }
];

const SectionCard = ({ title, subtitle, right, children }) => (
  <article className="section-card">
    <div className="section-head">
      <div>
        <h3>{title}</h3>
        {subtitle ? <p className="subtitle">{subtitle}</p> : null}
      </div>
      {right ? <p className="meta">{right}</p> : null}
    </div>
    {children}
  </article>
);

const HomePage = ({ portfolio }) => {
  const { basics, projects, education, skills } = portfolio;

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Full Stack Developer</p>
        <h1>{basics.name}</h1>
        <p className="hero-copy">
          MERN stack developer focused on building reliable backend systems and clean, user-friendly interfaces.
        </p>
        <div className="contact-row">
          <a href={`mailto:${basics.email}`}>{basics.email}</a>
          <a href={`tel:${basics.phone}`}>{basics.phone}</a>
          <a href={basics.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={basics.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <section className="quick-nav card">
        <h2>Explore</h2>
        <div className="quick-grid">
          <a className="quick-link" href="#/projects">Home / Projects</a>
          <a className="quick-link" href="#/education">Home / Education</a>
          <a className="quick-link" href="#/experience">Home / Experience</a>
          <a className="quick-link" href="#/skills">Home / Skills</a>
        </div>
      </section>

      <section className="card" id="projects">
        <h2>Featured Projects</h2>
        <div className="grid-two">
          {projects.slice(0, 2).map((project) => (
            <SectionCard
              key={project.title}
              title={project.title}
              subtitle={project.stack.join(" · ")}
              right={project.period}
            >
              <p>{project.bullets[0]}</p>
              <a href={project.github} target="_blank" rel="noreferrer">View project</a>
            </SectionCard>
          ))}
        </div>
      </section>

      <section className="card" id="education">
        <h2>Education Snapshot</h2>
        <SectionCard
          title={education[0].institution}
          subtitle={education[0].degree}
          right={education[0].period}
        >
          <p>{education[0].details}</p>
          <p className="muted">{education[0].location}</p>
        </SectionCard>
      </section>

      <section className="card" id="skills">
        <h2>Core Stack</h2>
        <div className="chip-list">
          {[...skills.frameworks, "MongoDB", "Node.js"].map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </div>
      </section>
    </>
  );
};

const ProjectsPage = ({ projects }) => (
  <section className="card page-block">
    <h2>Projects</h2>
    {projects.map((project) => (
      <SectionCard
        key={project.title}
        title={project.title}
        subtitle={project.stack.join(" · ")}
        right={project.period}
      >
        <ul>
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <a href={project.github} target="_blank" rel="noreferrer">Visit GitHub Repository</a>
      </SectionCard>
    ))}
  </section>
);

const EducationPage = ({ education, coursework }) => (
  <section className="card page-block">
    <h2>Education</h2>
    {education.map((item) => (
      <SectionCard
        key={`${item.institution}-${item.period}`}
        title={item.institution}
        subtitle={item.degree}
        right={item.period}
      >
        <p>{item.details}</p>
        <p className="muted">{item.location}</p>
      </SectionCard>
    ))}

    <h2 className="inner-title">Relevant Coursework</h2>
    <div className="chip-list">
      {coursework.map((course) => (
        <span className="chip" key={course}>{course}</span>
      ))}
    </div>
  </section>
);

const ExperiencePage = ({ experience, achievements, extracurricular }) => (
  <section className="card page-block">
    <h2>Experience & Achievements</h2>
    {experience.map((item) => (
      <SectionCard key={item.role} title={item.role} subtitle={item.organization} right={item.period}>
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </SectionCard>
    ))}

    {achievements.map((item) => (
      <SectionCard key={item.title} title={item.title}>
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </SectionCard>
    ))}

    <SectionCard title={extracurricular.title} right={extracurricular.period}>
      <ul>
        {extracurricular.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </SectionCard>
  </section>
);

const SkillsPage = ({ skills, basics }) => (
  <section className="card page-block">
    <h2>Technical Skills</h2>
    <SectionCard title="Languages">
      <p>{skills.languages.join(", ")}</p>
    </SectionCard>
    <SectionCard title="Frameworks & Libraries">
      <p>{skills.frameworks.join(", ")}</p>
    </SectionCard>
    <SectionCard title="Tools">
      <p>{skills.tools.join(", ")}</p>
    </SectionCard>

    <h2 className="inner-title">Connect</h2>
    <div className="contact-row left">
      <a href={basics.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={basics.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={basics.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
      <a href={`mailto:${basics.email}`}>Email</a>
    </div>
  </section>
);

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    fetch(`${API_BASE}/api/portfolio`)
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((error) => console.error("Failed to load portfolio:", error));
  }, []);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (!portfolio) {
    return (
      <main className="app-shell loading">
        <p>Loading portfolio...</p>
      </main>
    );
  }

  const { basics, projects, education, coursework, experience, achievements, extracurricular, skills } = portfolio;

  return (
    <main className="app-shell">
      <header className="topbar card">
        <h2>{basics.name}</h2>
        <nav>
          {sections.map((item) => (
            <a
              key={item.route}
              href={`#${item.route}`}
              className={route === item.route ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {route === "/" && <HomePage portfolio={portfolio} />}
      {route === "/projects" && <ProjectsPage projects={projects} />}
      {route === "/education" && <EducationPage education={education} coursework={coursework} />}
      {route === "/experience" && (
        <ExperiencePage experience={experience} achievements={achievements} extracurricular={extracurricular} />
      )}
      {route === "/skills" && <SkillsPage skills={skills} basics={basics} />}
    </main>
  );
}

export default App;
