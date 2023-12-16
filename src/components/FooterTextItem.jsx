import styled from "styled-components";
import PropTypes from "prop-types";

const FooterTextItemStyle = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color--textPrimary);
  cursor: pointer;
`;

const FooterTextItem = ({ text }) => {
  return <FooterTextItemStyle>{text}</FooterTextItemStyle>;
};

FooterTextItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FooterTextItem;
