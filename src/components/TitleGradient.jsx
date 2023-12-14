import styled from "styled-components";
import PropTypes from "prop-types";

const TitleGradientStyle = styled.h1`
  background-image: linear-gradient(40deg, #c0b7e8, #8176af);
  color: transparent;
  -webkit-background-clip: text; /* Para navegadores WebKit (Chrome, Safari, etc.) */
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 700;
`;

const TitleGradient = ({ text }) => {
  return <TitleGradientStyle>{text}</TitleGradientStyle>;
};

TitleGradient.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleGradient;
