import ContactSection from "./components/ContactSection";
import Intro from "./components/Intro";
import LifeTimelineSection from "./components/LifeTimelineSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumePage from "./components/ResumePage";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import StickyHeader from "./components/StickyHeader";
import TechTicker from "./components/TechTicker";
import portfolioData from "./data/portfolioData";
function App() {
  const isResumePage = window.location.pathname === "/resume";
  if (isResumePage) {
    return <ResumePage resume={portfolioData.resume} />;
  }
  const { basics, education, experience, projects, skills } = portfolioData;
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
        <LifeTimelineSection education={education} experience={experience} />
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
