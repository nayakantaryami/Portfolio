const services = [
  {
    title: "Design",
    description:
      "From concept to completion with a focus on clarity, hierarchy, and user intent.",
  },
  {
    title: "Development",
    description:
      "Modern stacks, scalable architectures, and clean APIs that hold up in production.",
  },
  {
    title: "Automations",
    description:
      "AI-driven workflows that keep performance high and operational costs lean.",
  },
];
const ServicesSection = () => (
  <section className="services card">
    <div id="services" className="anchor" />
    <div className="services-head">
      <p className="section-kicker">Solutions</p>
      <h2>Integrating design, software architecture, and AI.</h2>
      <p className="services-subtitle">
        A focused delivery model that blends product thinking with reliable
        engineering.
      </p>
    </div>
    <div className="services-grid">
      {services.map((service, index) => (
        <article key={service.title} className="service-card">
          <span className="service-index">0{index + 1}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  </section>
);
export default ServicesSection;
