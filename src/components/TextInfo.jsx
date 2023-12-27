import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TextInfoStyle = styled.p`
  color: var(--color--textPrimary);
  font-size: 1rem;
  line-height: 1.4rem;
  @media screen and (max-width: 1020px) {
    font-size: 0.875rem;
  }

  ${(props) =>
    props.$header &&
    css`
      @media screen and (max-width: 750px) {
        display: none;
      }
    `}
  ${(props) =>
    props.$servicesMD &&
    css`
      @media screen and (max-width: 750px) {
        display: none;
      }
    `}
`;
const TextInfo = ({ text, header, servicesMD }) => {
  return (
    <TextInfoStyle $header={header} $servicesMD={servicesMD}>
      {text}
    </TextInfoStyle>
  );
};

TextInfo.propTypes = {
  text: PropTypes.string.isRequired,
  header: PropTypes.bool,
  servicesMD: PropTypes.bool,
};

export default TextInfo;
