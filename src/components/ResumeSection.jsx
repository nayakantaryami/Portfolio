const RESUME_ID = "18tdkE07_MSRC1-taylQPaKOvo6x5XMNj";
const RESUME_PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/preview`;
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/view?usp=sharing`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;

const ResumeSection = () => (
  <section className="resume card">
    <div id="resume" className="anchor" />
    <div className="section-head">
      <p className="section-kicker">Resume</p>
      <h2>My resume, ready to view.</h2>
    </div>
    <div className="resume-grid">
      <div className="resume-card">
        <p className="resume-copy">
          A concise overview of my experience, skills, and project work.
        </p>
        <div className="resume-actions">
          <a
            className="hero-button"
            href={RESUME_VIEW_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open PDF
          </a>
          <a
            className="hero-button ghost"
            href={RESUME_DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </div>
      </div>
      <div className="resume-preview" aria-label="Resume preview">
        <iframe title="Resume" src={RESUME_PREVIEW_URL} loading="lazy" />
      </div>
    </div>
  </section>
);

export default ResumeSection;
