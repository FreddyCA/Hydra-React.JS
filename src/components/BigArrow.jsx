import styled from "styled-components";
import arrowSVG from "../assets/svg/arrowBig.svg";
const BigArrowStyle = styled.img`
  height: 40px;
`;

const BigArrow = () => {
  return (
    <BigArrowStyle src={arrowSVG} alt="flecha que indica texto"></BigArrowStyle>
  );
};

export default BigArrow;
