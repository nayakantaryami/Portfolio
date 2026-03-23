const Section = ({ title, children }) => (
  <section className="section card">
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
