import Section from "./Section";
const formatLink = (value) => (value ? value.replace(/^https?:\/\//, "") : "");
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
    <path
      d="M18.901 2H22l-7.56 8.64L22.8 22h-6.09l-4.77-6.2L6.64 22H3.5l8.09-9.25L1.2 2h6.24l4.31 5.64L18.9 2zm-1.08 18h1.69L7.3 3.91H5.5L17.82 20z"
      fill="currentColor"
    />
  </svg>
);
const ContactSection = ({ basics }) => {
  const twitterUrl = basics.twitter || "https://x.com/";
  const items = [
    basics.github && {
      label: "GitHub",
      value: formatLink(basics.github),
      href: basics.github,
      icon: "{}",
    },
    basics.linkedin && {
      label: "LinkedIn",
      value: formatLink(basics.linkedin),
      href: basics.linkedin,
      icon: "in",
    },
    twitterUrl && {
      label: "X (Twitter)",
      value: formatLink(twitterUrl),
      href: twitterUrl,
      icon: <TwitterIcon />,
    },
    basics.email && {
      label: "Email",
      value: basics.email,
      href: `mailto:${basics.email}`,
      icon: "@",
    },
  ].filter(Boolean);
  return (
    <Section title="Let's build something" subtitle="Contact">
      <div id="contact" className="anchor" />
      <div className="contact-cta">
        <div>
          <h3>Ready to collaborate?</h3>
          <p>
            I help teams ship reliable products with a balance of performance,
            clarity, and long-term scalability.
          </p>
        </div>
        <div className="contact-grid">
          {items.map((item) => (
            <a
              key={item.label}
              className="contact-card"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span className="contact-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default ContactSection;
