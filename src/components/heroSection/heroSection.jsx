import "./herosection.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="site-wrapper">
        <div className="section-container hero">
          <div className="home-hero-label">DOCUMENT AI PLATFORM</div>
          <div className="hero-heading-container">
            <h1 className="display-text">
              Extract data from <br /> unstructured documents
            </h1>
          </div>
          <div className="subheading">Easily. Efficiently. Accurately.</div>
          <div className="cta-container-2">
            <a href="#" className="free-trial-btn">
              Start free 14-day trial
            </a>
            <a href="#" className="product-tour-btn">
              Start Product Tour <span>&rarr;</span>
            </a>
          </div>
          <div className="home-hero-label">No Credit Card Required</div>
          <div className="home-badge-cover">
            <img
              src="/images/HighPerformer.svg"
              className="g2-badge"
              alt="G2 Badge"
            />
            <div className="star-cover">
              <div className="performance-text">
                Ranked as High Performer on G2 (4.75 of 5)
              </div>
              <img
                src="/images/herostart.svg"
                alt="star"
                className="star-rating"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
