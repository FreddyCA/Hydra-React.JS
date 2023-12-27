import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";
import PropTypes from "prop-types";

const ServiceItemStyle = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1.5rem;
  background: radial-gradient(circle, #433d60, #211e2e);
  border-radius: 40px;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const ServiceItemImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #0e0e0e;
`;

const ServiceItemTitle = styled.h4`
  color: var(--color--textPrimary);
  font-size: 1rem;
  font-weight: 700;
  padding: 0 0 1rem;
  border-bottom: 2px solid rgba(192, 183, 232, 0.3);
`;
const ServiceItemDesc = styled.p`
  color: var(--color--textPrimary);
  font-size: 0.775rem;
`;

const ServiceItem = ({ title, img, desc }) => {
  return (
    <ServiceItemStyle>
      <ServiceItemImg src={img} alt={title} />
      <ServiceItemTitle>{title}</ServiceItemTitle>
      <ServiceItemDesc>{desc}</ServiceItemDesc>
      <ButtonPrimary text="PRUEBALO AHORA" padding={"0.875rem 1rem"} />
    </ServiceItemStyle>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ServiceItem;
