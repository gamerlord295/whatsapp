import "./topbar.css";
import Topbarbutton from "./topbarbutton";
import Download from "./download";
import { useState } from "react";
import Sidebar from "./sidebar";

const Topbar = () => {
  const [show, setShow] = useState('');

  const showSideBar = () => {
    if (show === ''){
      setShow('visible')
    } else {
      setShow('')
    }
  }

  return (
    <>
      <div className="topbar">
        <svg
          onClick={() => showSideBar()}
          className="lines"
          viewBox="0 0 25 33"
          fill="none"
        >
          <line
            x1="1.04297"
            y1="12.75"
            x2="23.543"
            y2="12.75"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></line>
          <line
            x1="1.04297"
            y1="16.75"
            x2="23.543"
            y2="16.75"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></line>
          <line
            x1="1.04297"
            y1="20.75"
            x2="23.543"
            y2="20.75"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></line>
        </svg>
        <img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" />
        <div className="buttons">
          <Topbarbutton title="Features">
            <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" />
          </Topbarbutton>
          <Topbarbutton title="Privacy" />
          <Topbarbutton title="Help Center" />
          <Topbarbutton title="Blog" />
          <Topbarbutton title="For Business" />
          <Topbarbutton title="WhatsApp Web" />
          <Topbarbutton title="Download" />
        </div>
        <Download />
      </div>
      <Sidebar show={show} setShow={setShow}/>
    </>
  );
};

export default Topbar;
