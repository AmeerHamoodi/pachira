import "./Partners.css";

import Flex from "../components/Flex";
import Button from "../components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faHandHoldingUsd, faPiggyBank } from "@fortawesome/free-solid-svg-icons";

function Partners() {
  const PartnerIcon = ({ icon }) => (
    <FontAwesomeIcon icon={icon} size="4x" color="white" className="partner_icon" />
  );

  const PartnerDetailsSection = ({ heading, body }) => (
    <Flex column justify="start" className="partner_details_content">
      <h3 className="text-center">{heading}</h3>
      <p>{body}</p>
      <Button>LEARN MORE</Button>
    </Flex>
  );

  return (
    <>
      <div className="partners">
        <section>
          <h1>OUR PARTNERS</h1>
          <p>
            Pachira has negotiated discounts, deals, and commissions with numerous retailers.
            Through these special agreements, Pachira shares commissions and savings with our users
            to empower their giving journeys and make impact.
          </p>
        </section>
        <section className="partner_icons">
          <Flex row justify="around">
            <PartnerIcon icon={faCartArrowDown} />
            <PartnerIcon icon={faHandHoldingUsd} />
            <PartnerIcon icon={faPiggyBank} />
          </Flex>
        </section>
        <section className="partner_details">
          <Flex row justify="around">
            <PartnerDetailsSection
              heading="BUSINESS PARTNERS"
              body="We are focused on empowering businesses to be socially responsible and encourage their current and future customers to do the same. By becoming a Certified Giving Organization through Pachira, you can share your impact with the world!"
            />
            <PartnerDetailsSection
              heading="CHARITY PARTNERS"
              body="By constantly adding to our roster of Charity Partners, we are able to provide the ultimate giving experience for our users, with countless options, while providing charities with direct connections to individuals actively seeking organizations to support. "
            />
            <PartnerDetailsSection
              heading="FUNDRAISING PARTNERS"
              body="Fundraising can be a challenge, and we are striving to change that! By setting up your fundraiser through Pachira, your can reach your fundraising goals and beyond, just by shopping! Plus, you can have unlimited supporters which means even more funds for your cause!"
            />
          </Flex>
        </section>
      </div>
    </>
  );
}

export default Partners;
