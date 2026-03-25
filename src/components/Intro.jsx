import { useEffect, useState } from "react";

const PROFILE_IMAGE = "/linkedinprofile.jpg";
const TITLE_LINE_1 =
  "Integrating software architecture, product thinking, and AI to ship";
const LINE_SPEED = 70;
const LINE_GAP_DELAY = 700;

const TypewriterLine = ({ text, speed, startDelay }) => {
  const [count, setCount] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(media.matches);
    onChange();
    if (media.addEventListener) {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }
    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setCount(text.length);
      setActive(false);
      return undefined;
    }
    let current = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      setActive(true);
      intervalId = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= text.length) {
          clearInterval(intervalId);
          setActive(false);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [text, speed, startDelay, reduceMotion]);

  const done = count >= text.length;

  return (
    <span
      className="typewriter-line"
      data-active={active ? "true" : "false"}
      data-done={done ? "true" : "false"}
    >
      {text.slice(0, count)}
    </span>
  );
};
const Intro = ({ basics, stats }) => (
  <section className="hero">
    <div className="hero-text">
      <p className="hero-kicker">Engineering scalable digital solutions.</p>
      <h1 className="hero-title">
        <TypewriterLine text={TITLE_LINE_1} speed={LINE_SPEED} startDelay={0} />
        
      </h1>
      <p className="hero-summary">{basics.summary}</p>
      <div className="hero-actions">
        <a className="hero-button" href={`mailto:${basics.email}`}>
          Any project in mind?
        </a>
        <a
          className="hero-button ghost"
          href={basics.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
    <aside className="hero-card">
      <div className="hero-photo" aria-label="Profile photo">
        <img src={PROFILE_IMAGE} alt={`${basics.name} portrait`} />
      </div>
      <div className="hero-profile">
        <p className="hero-name">{basics.name}</p>
        <p className="hero-role">{basics.headline}</p>
        <div className="hero-contact">
          <span>{basics.email}</span>
          <span>{basics.phone}</span>
        </div>
      </div>
    </aside>
  </section>
);
export default Intro;
