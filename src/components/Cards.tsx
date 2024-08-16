import "../styles/Cards.scss";
import CTA from "./CTA";
const Cards = () => {
  return (
    <section className="cards-section">
      <div className="cards-section-header">
        <p>eiusmod tempor incididunt</p>

        <div className="cards-section-text">
          <h2>Nostrud exercitation ullamco </h2>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </p>
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 52.5C10 43.6838 16.5193 36.3902 25 35.1772M49.6815 38.0095C49.511 38.0198 49.3393 38.025 49.1668 38.025C46.6055 38.025 44.2693 36.881 42.5 35C40.7307 36.881 38.3945 38.0247 35.8332 38.0247C35.6607 38.0247 35.489 38.0195 35.3185 38.0093C35.1105 38.9633 35 39.9637 35 40.9947C35 46.5302 38.187 51.1813 42.5 52.5C46.813 51.1813 50 46.5302 50 40.9947C50 39.9637 49.8895 38.9633 49.6815 38.0095ZM37.5 17.5C37.5 23.0229 33.0228 27.5 27.5 27.5C21.9771 27.5 17.5 23.0229 17.5 17.5C17.5 11.9771 21.9771 7.5 27.5 7.5C33.0228 7.5 37.5 11.9771 37.5 17.5Z"
              className="svg-stroke-accent"
              stroke-width="3.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3>Lorem ipsum dolor</h3>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </p>
        </div>
        <div className="card">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 36.25V41.25M17.5 25.072C18.6785 25 20.1315 25 22 25H38C39.8685 25 41.3215 25 42.5 25.072M17.5 25.072C16.0292 25.1618 14.9857 25.3637 14.0951 25.8175C12.6839 26.5365 11.5365 27.6837 10.8175 29.095C10 30.6995 10 32.7995 10 37V40.5C10 44.7005 10 46.8005 10.8175 48.405C11.5365 49.8162 12.6839 50.9635 14.0951 51.6825C15.6994 52.5 17.7996 52.5 22 52.5H38C42.2005 52.5 44.3005 52.5 45.905 51.6825C47.3162 50.9635 48.4635 49.8162 49.1825 48.405C50 46.8005 50 44.7005 50 40.5V37C50 32.7995 50 30.6995 49.1825 29.095C48.4635 27.6837 47.3162 26.5365 45.905 25.8175C45.0142 25.3637 43.9707 25.1618 42.5 25.072M17.5 25.072V20C17.5 13.0964 23.0964 7.5 30 7.5C36.9035 7.5 42.5 13.0964 42.5 20V25.072"
              className="svg-stroke-accent"
              stroke-width="3.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3>Lorem ipsum dolor</h3>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </p>
        </div>
        <div className="card">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 21.25V20.8854C45 16.2543 41.2457 12.5 36.6145 12.5H23.75C18.9175 12.5 15 16.4175 15 21.25C15 26.0825 18.9175 30 23.75 30H36.25C41.0825 30 45 33.9175 45 38.75C45 43.5825 41.0825 47.5 36.25 47.5H23.5677C18.8359 47.5 15 43.664 15 38.9322V38.75M30 7.5V52.5"
              className="svg-stroke-accent"
              stroke-width="3.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3>Lorem ipsum dolor</h3>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </p>
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default Cards;
