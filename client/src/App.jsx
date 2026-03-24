import { useEffect, useState } from "react";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Intro from "./components/Intro";
import ProjectsSection from "./components/ProjectsSection";
import ResumePage from "./components/ResumePage";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import StickyHeader from "./components/StickyHeader";
import TechTicker from "./components/TechTicker";
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
function App() {
  const [portfolio, setPortfolio] = useState(null);
  const isResumePage = window.location.pathname === "/resume";
  useEffect(() => {
    if (isResumePage) {
      return;
    }

    fetch(`${API_BASE}/api/portfolio`)
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((error) => console.error("Failed to load portfolio:", error));
  }, [isResumePage]);

  if (isResumePage) {
    return <ResumePage apiBase={API_BASE} />;
  }
  if (!portfolio) {
    return (
      <main className="page loading">
        <p>Loading portfolio...</p>
      </main>
    );
  }
  const { basics, education, experience, projects, skills } = portfolio;
  const techItems = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.tools,
  ];
  const stats = [
    { label: "Projects delivered", value: `${projects.length}+` },
    { label: "Roles", value: `${experience.length}` },
    { label: "Core skills", value: `${techItems.length}+` },
  ];
  return (
    <main className="page">
      <StickyHeader name={basics.name} />
      <Intro basics={basics} stats={stats} />
      <TechTicker items={techItems} />
      <section className="stack">
        <ServicesSection />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <SkillsSection skills={skills} />
        <ContactSection basics={basics} />
      </section>
      <footer className="footer">
        {new Date().getFullYear()} {basics.name}. All rights reserved.
      </footer>
    </main>
  );
}
export default App;
