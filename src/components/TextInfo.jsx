import styled from "styled-components";
import PropTypes from "prop-types";

const TextInfoStyle = styled.p`
  color: var(--color--textPrimary);
  font-size: 1rem;
  line-height: 1.4rem;
`;
const TextInfo = ({ text }) => {
  return <TextInfoStyle>{text}</TextInfoStyle>;
};

TextInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextInfo;
