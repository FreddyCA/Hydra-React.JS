import PropTypes from "prop-types";
import styled from "styled-components";
import BigArrow from "./BigArrow";

const SubtitleSecStyle = styled.h3`
  color: var(--color--textPrimary);
  font-size: 1.875rem;
  font-weight: 300;
`;
const SubtitleSecContent = styled.div`
  display: flex;
  gap: 1rem;
`;

const SubtitleSec = ({ text, arrow }) => {
  return (
    <SubtitleSecContent>
      <SubtitleSecStyle>{text}</SubtitleSecStyle>
      {!arrow && <BigArrow />}
    </SubtitleSecContent>
  );
};
SubtitleSec.propTypes = {
  text: PropTypes.string.isRequired,
  arrow: PropTypes.bool,
};

export default SubtitleSec;
