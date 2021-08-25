import "./Footer.css";

import Flex from "../components/Flex";
import Button from "../components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEnvelope } from "@fortawesome/free-solid-svg-icons/";

function Footer() {
  return (
    <>
      <section className="footer_green">
        <Flex row justify="center" align="center" wrap>
          <Flex column className="footer_content">
            <h4 style={{ marginBottom: "10px" }}>EMAIL US</h4>
            <span style={{ fontWeight: "lighter" }}>
              <FontAwesomeIcon icon={faEnvelope} /> INFO@PACHIRA.CA
            </span>
          </Flex>
          <Flex row justify="center" className="footer_content footer_buttons">
            <Button className="footer_signup">TEST</Button>
            <Button className="footer_login">TEST</Button>
          </Flex>
        </Flex>
      </section>
      <section className="footer">
        <Flex row justify="center" wrap>
          <Flex column wrap style={{ margin: "0 20px" }} className="footer_image">
            <img
              src="https://static.wixstatic.com/media/112477_7bd3667488564351aa36f8c2781e4ab5~mv2.png/v1/fill/w_186,h_155,al_c,q_85,usm_0.66_1.00_0.01/Pachira%20Logo%20(multicolor)%20-%20PNG%20(1).webp"
              alt="pachira"
            />
          </Flex>
          <Flex column wrap style={{ margin: "0 40px" }}>
            <h4 className="footer_heading">CONNECT WITH US</h4>
            <Flex row wrap>
              <FontAwesomeIcon style={{ margin: "0 10px" }} icon={faCamera} />
              <FontAwesomeIcon style={{ margin: "0 10px" }} icon={faCamera} />
              <FontAwesomeIcon style={{ margin: "0 10px" }} icon={faCamera} />
              <FontAwesomeIcon style={{ margin: "0 10px" }} icon={faCamera} />
              <FontAwesomeIcon style={{ margin: "0 10px" }} icon={faCamera} />
              <FontAwesomeIcon style={{ margin: "0 10px" }} icon={faCamera} />
            </Flex>
          </Flex>
          <Flex column wrap style={{ margin: "0 20px" }}>
            <h4 className="footer_heading" style={{ marginBottom: "0" }}>
              LEARN MORE
            </h4>
            <Flex column>
              <span className="footer_link">HOME</span>
              <span className="footer_link">HOME</span>
              <span className="footer_link active">PARTNERS</span>
              <span className="footer_link">HOME</span>
              <span className="footer_link">HOME</span>
              <span className="footer_link">HOME</span>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </>
  );
}

export default Footer;
