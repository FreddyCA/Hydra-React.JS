import styled from "styled-components";
import PropTypes from "prop-types";

const BorderGradientStyle = styled.div`
  background: linear-gradient(
    to right,
    rgba(52, 48, 69, 0.3),
    rgba(192, 183, 232, 1),
    rgba(52, 48, 69, 0.3)
  );
  min-height: 2px;
  
`;

const BorderGradientStyleColum = styled.span`
  background: linear-gradient(
    to bottom,
    rgba(52, 48, 69, 0.3),
    rgba(192, 183, 232, 1),
    rgba(52, 48, 69, 0.3)
  );
  min-width: 2px;
  height: 180px;
  margin: auto 0;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const BorderGradient = ({ colum }) => {
  return colum ? (
    <BorderGradientStyleColum></BorderGradientStyleColum>
  ) : (
    <BorderGradientStyle></BorderGradientStyle>
  );
};

BorderGradient.propTypes = {
  colum: PropTypes.bool,
};

export default BorderGradient;
