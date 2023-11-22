/* eslint-disable react/prop-types */
import "./feature.css";

const Feature = ({ classNam, src, src2, children,  }) => {
  const classes = `feature ${classNam}`;
  return (
    <div className={classes}>
      <div className="fContent">
        {children}
        <button>
          <span>Learn more</span>
          <svg width="10" height="15">
            <path
              d="M0.879395 13.0463L6.41356 7.5L0.879395 1.95375L2.58314 0.25L9.83315 7.5L2.58314 14.75L0.879395 13.0463Z"
              fill="black"
            ></path>
          </svg>
        </button>
      </div>
      {src2 ? (
        <div className="imgContainer">
          <img src={src2} className="img2" />
          <img src={src} />
        </div>
      ) : (
        <img src={src} />
      )}
    </div>
  );
};

export default Feature;
