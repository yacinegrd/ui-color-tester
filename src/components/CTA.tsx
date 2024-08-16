const CTA = () => {
  return (
    <div className="cta">
      <div className="cta-text">
        <h2>nostrud exercitation ullamco laboris</h2>
        <p>
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <button>Button</button>
      </div>
      <svg
        width="464"
        height="325"
        viewBox="0 0 464 325"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_12_7"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="465"
          height="325"
        >
          <rect width="465" height="325" className="svg-fill-primary" />
        </mask>
        <g mask="url(#mask0_12_7)">
          <circle
            cx="276.5"
            cy="138.5"
            r="276.5"
            className="svg-fill-secondary"
          />
          <path
            d="M136 65C136 113.325 174.951 152.5 223 152.5C174.951 152.5 136 191.675 136 240C136 191.675 97.0487 152.5 49 152.5C97.0487 152.5 136 113.325 136 65Z"
            className="svg-fill-primary svg-stroke-primary"
            strokeWidth="3.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M339 65C339 113.325 377.951 152.5 426 152.5C377.951 152.5 339 191.675 339 240C339 191.675 300.049 152.5 252 152.5C300.049 152.5 339 113.325 339 65Z"
            className="svg-fill-primary svg-stroke-primary"
            strokeWidth="3.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default CTA;
