const PROFILE_IMAGE = "/linkedinprofile.jpg";

const Intro = ({ basics }) => (
  <section className="intro card">
    <div className="intro-text">
      <p className="intro-tag">Hello, I am</p>
      <h1 className="intro-name">{basics.name}</h1>
      <p className="intro-role">{basics.headline}</p>
      <p className="intro-summary">{basics.summary}</p>
      <div className="intro-actions">
        <a className="intro-button" href={`mailto:${basics.email}`}>
          Contact Me
        </a>
        <a
          className="intro-button ghost"
          href={basics.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
    <div className="intro-photo" aria-label="Profile photo">
      <img src={PROFILE_IMAGE} alt={`${basics.name} portrait`} />
    </div>
  </section>
);

export default Intro;
