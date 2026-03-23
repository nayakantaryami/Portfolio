import { useEffect, useState } from "react";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Intro from "./components/Intro";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import StickyHeader from "./components/StickyHeader";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

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
      <main className="page loading">
        <p>Loading portfolio...</p>
      </main>
    );
  }

  const { basics, education, experience, projects, skills } = portfolio;

  return (
    <main className="page">
      <StickyHeader name={basics.name} />
      <Intro basics={basics} />
      <section className="stack">
        <EducationSection education={education} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection basics={basics} />
      </section>
    </main>
  );
}

export default App;
