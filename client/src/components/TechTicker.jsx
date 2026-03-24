const TechTicker = ({ items }) => {
  const loopItems = [...items, ...items];
  return (
    <section className="ticker" aria-label="Technical arsenal">
      <div className="ticker-track">
        {loopItems.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};
export default TechTicker;
