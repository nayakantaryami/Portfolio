import { useEffect, useState } from "react";

const ResumePage = ({ apiBase }) => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch(`${apiBase}/resume`)
      .then((res) => res.json())
      .then((data) => setResume(data))
      .catch((error) => console.error("Failed to load resume:", error));
  }, [apiBase]);

  if (!resume) {
    return (
      <main className="page loading">
        <p>Loading resume...</p>
      </main>
    );
  }

  return (
    <main className="page resume-page">
      <section className="resume card">
        <div className="section-head">
          <p className="section-kicker">Resume</p>
          <h2>Resume and profile highlights.</h2>
        </div>
        <div className="resume-grid">
          <div className="resume-preview" aria-label="Resume preview">
            <iframe
              title="Resume"
              src={resume.resumePreviewUrl}
              loading="lazy"
            />
          </div>
          <aside className="resume-photos">
            <div className="resume-card">
              <p className="resume-copy">Open or download the resume PDF.</p>
              <div className="resume-actions">
                <a
                  className="hero-button"
                  href={resume.resumeViewUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF
                </a>
                <a
                  className="hero-button ghost"
                  href={resume.resumeDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="resume-photo-grid">
              {resume.photos.map((url) => (
                <img key={url} src={url} alt="Resume" />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ResumePage;
