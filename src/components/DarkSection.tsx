import "../styles/DarkSection.scss";
const DarkSection = () => {
  return (
    <div className="full-width">
      <section className="dark-section">
        <div className="dark-section-header">
          <h2>Consectetur Adipiscing Aliquip Elit </h2>
          <div className="dark-section-text">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 1C9.5 5.69442 13.3055 9.5 18 9.5C13.3055 9.5 9.5 13.3055 9.5 18C9.5 13.3055 5.69442 9.5 1 9.5C5.69442 9.5 9.5 5.69442 9.5 1Z"
                className="svg-fill-accent svg-stroke-accent"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="dark-section-info-container">
          <div className="dark-section-info">
            <h3>+48%</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="dark-section-info">
            <h3>$350m</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="dark-section-info">
            <h3>74k</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DarkSection;
