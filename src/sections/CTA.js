import "./CTA.css";

import Flex from "../components/Flex";
import Button from "../components/Button";

function CTA() {
  return (
    <section className="cta">
      <Flex row justify="center" wrap>
        <div className="cta_background">
          <h1 style={{ wordWrap: "break-all", lineHeight: "1", overflowWrap: "break-word" }}>
            LET'S PARTNER FOR GOOD!
          </h1>
        </div>

        <div className="cta_details">
          <p>
            Whether you are a business owner, social activist or charity representative, we've got
            all the information waiting for you! ​
          </p>
          <p>
            Check out our partner pages or book a free one-on-one consultation with one of our
            representatives to learn how you can become a Pachira partner.
          </p>
          <Button style={{ width: "100%", marginTop: "20px" }}>BOOK NOW</Button>
        </div>
      </Flex>
    </section>
  );
}

export default CTA;
