const StickyHeader = ({ name }) => (
  <header className="sticky-header">
    <div className="brand">{name}</div>
    <nav className="nav">
      <a className="nav-link" href="#services">
        Solutions
      </a>
      <a className="nav-link" href="/resume">
        Resume
      </a>
      <a className="nav-link" href="#projects">
        Projects
      </a>
      <a className="nav-link" href="#experience">
        Experience
      </a>
      <a className="nav-link" href="#skills">
        Skills
      </a>
      <a className="nav-link" href="#contact">
        Contact
      </a>
    </nav>
    <a className="nav-cta" href="#contact">
      Let's chat
    </a>
  </header>
);
export default StickyHeader;
