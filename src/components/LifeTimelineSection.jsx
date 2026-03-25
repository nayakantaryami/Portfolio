import { useEffect, useRef, useState } from "react";
import Section from "./Section";

const extractYear = (period) => {
  const match = period.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
};

const LifeTimelineSection = ({ education, experience }) => {
  const [progress, setProgress] = useState(0);
  const [checkpointHeat, setCheckpointHeat] = useState([]);
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);
  const educationOrdered = [...education].reverse();
  const experienceOrdered = [...experience].sort(
    (a, b) => extractYear(a.period) - extractYear(b.period),
  );
  const timelineItems = [
    ...educationOrdered.map((item) => ({
      type: "Education",
      title: item.degree,
      subtitle: item.institution,
      meta: `${item.period} · ${item.location}`,
      details: item.details,
    })),
    ...experienceOrdered.map((item) => ({
      type: "Experience",
      title: item.role,
      subtitle: item.organization,
      meta: item.period,
    })),
  ];

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, timelineItems.length);

    let frameId;
    const updateProgress = () => {
      if (!timelineRef.current) {
        return;
      }
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const top = rect.top + scrollY;
      const height = rect.height || 1;
      const start = top - viewportHeight * 0.4;
      const end = top + height - viewportHeight * 0.6;
      const raw = (scrollY - start) / (end - start);
      const clamped = Math.min(Math.max(raw, 0), 1);
      setProgress(clamped * 100);

      const progressPx = clamped * height;
      const fadeRange = 140;
      const heat = itemRefs.current.map((item) => {
        if (!item) {
          return 0;
        }
        const itemTop = item.offsetTop;
        const value = (progressPx - itemTop + fadeRange) / (fadeRange * 2);
        return Math.min(Math.max(value, 0), 1);
      });
      setCheckpointHeat(heat);
    };

    const onScroll = () => {
      if (frameId) {
        return;
      }
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [timelineItems.length]);

  const flow = `${Math.min(progress * 1.2, 100)}%`;

  return (
    <Section title="Life Timeline" subtitle="Stepping Stones">
      <div id="timeline" className="anchor" />
      <ol
        ref={timelineRef}
        className="life-timeline"
        style={{
          "--timeline-progress": `${progress}%`,
          "--timeline-flow": flow,
        }}
      >
        {timelineItems.map((item, index) => (
          <li
            key={`${item.type}-${item.title}`}
            className={`life-item ${index % 2 === 0 ? "left" : "right"}`}
            data-index={index}
            style={{ "--checkpoint-heat": checkpointHeat[index] ?? 0 }}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          >
            <div className="life-marker">
              <span className="life-dot" aria-hidden="true" />
            </div>
            <div className="life-content">
              <p className="life-kicker">{item.type}</p>
              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
              {item.details ? (
                <p className="life-details">{item.details}</p>
              ) : null}
              <p className="life-meta">{item.meta}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default LifeTimelineSection;
