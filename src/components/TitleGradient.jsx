import styled from "styled-components";

const TitleGradientStyle = styled.h1`
  background-image: linear-gradient(40deg, #c0b7e8, #8176af);
  color: transparent;
  -webkit-background-clip: text; /* Para navegadores WebKit (Chrome, Safari, etc.) */
  background-clip: text;
`;

const TitleGradient = () => {
  return <TitleGradientStyle>TitleGradient</TitleGradientStyle>;
};

export default TitleGradient;
