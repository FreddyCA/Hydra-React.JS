import styled from "styled-components";
import PropTypes from "prop-types";

const SubtitleStyle = styled.h2`
  color: var(--color--textPrimary);
  font-size: 2rem;
  font-weight: 700;
`;

const Subtitle = ({ text }) => {
  return <SubtitleStyle>{text}</SubtitleStyle>;
};

export default Subtitle;

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};
