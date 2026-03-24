const Section = ({ title, subtitle, children }) => (
  <section className="section card">
    <div className="section-head">
      {subtitle ? <p className="section-kicker">{subtitle}</p> : null}
      <h2>{title}</h2>
    </div>
    {children}
  </section>
);
export default Section;
