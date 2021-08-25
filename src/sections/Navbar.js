import "./Navbar.css";

import Flex from "../components/Flex";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons/";

import { useState } from "react";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <Flex row justify="center" align="end">
          <img
            src="https://static.wixstatic.com/media/112477_7bd3667488564351aa36f8c2781e4ab5~mv2.png/v1/fill/w_104,h_87,al_c,q_85,usm_0.66_1.00_0.01/Pachira%20Logo%20(multicolor)%20-%20PNG%20(1).webp"
            alt="pachira"
          />
          <Flex row justify="center" style={{ marginLeft: "50px" }}>
            <span className="nav_link">LINK</span>
            <span className="nav_link">LINK</span>
            <span className="nav_link active">LINK</span>
            <span className="nav_link">LINK</span>
            <span className="nav_link">LINK</span>
            <span className="nav_link">LINK</span>
            <Button className="nav_button btn_shadow" style={{ marginLeft: "20px" }}>
              SIGNUP
            </Button>
            <Button className="nav_button btn_dark">LOGIN</Button>
          </Flex>
        </Flex>
      </div>
      <div className="hamburger_navbar">
        <FontAwesomeIcon
          icon={hamburgerOpen ? faTimes : faBars}
          size="2x"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        />
        {hamburgerOpen ? (
          <Flex column align="center" className="hamburger_nav_content">
            <span className="nav_link">LINK</span>
            <span className="nav_link">LINK</span>
            <span className="nav_link active">LINK</span>
            <span className="nav_link">LINK</span>
            <span className="nav_link">LINK</span>
            <span className="nav_link">LINK</span>
            <Button className="nav_button btn_shadow">SIGNUP</Button>
            <Button className="nav_button btn_dark">LOGIN</Button>
          </Flex>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
