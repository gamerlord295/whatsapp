/* eslint-disable react/prop-types */
import './social.css'

const Social = ({ children }) => {
  return (
    <>
      <button className="socialButton">{children}</button>
    </>
  );
};

export default Social;
