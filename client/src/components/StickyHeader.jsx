const StickyHeader = ({ name }) => (
  <header className="sticky-header">
    <div className="brand">{name}</div>
    <nav className="nav">
      <a className="nav-link" href="#education">
        Education
      </a>
      <a className="nav-link" href="#experience">
        Experience
      </a>
      <a className="nav-link" href="#projects">
        Projects
      </a>
      <a className="nav-link" href="#skills">
        Skills
      </a>
      <a className="nav-link" href="#contact">
        Contact
      </a>
    </nav>
  </header>
);

export default StickyHeader;
