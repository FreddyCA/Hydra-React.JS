import styled from "styled-components";
import PropTypes from "prop-types";

const TechItemStyle = styled.img`
  width: 150px;
  height: 150px;
`;

const TechItem = ({ img, alt }) => {
  return <TechItemStyle src={img} alt={alt} />;
};

TechItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default TechItem;
