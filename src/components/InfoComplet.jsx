import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Subtitle from "./Subtitle";
import SubtitleSec from "./SubtitleSec";
import TextInfo from "./TextInfo";

const InfoCompletStyle = styled.div`
  display: flex;
  ${(props) =>
    props.$aboutUsMD &&
    css`
      @media screen and (max-width: 750px) {
        display: none;
      }
    `}
`;

const IntroducciónTitleContent = styled.div`
  margin-right: 2rem;
  min-width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media screen and (max-width: 1020px) {
    min-width: 45%;
  }
  ${(props) =>
    props.$servicesMD &&
    css`
      @media screen and (max-width: 750px) {
        align-items: center;
        margin: 0 auto;
      }
    `}
`;

const InfoComplet = ({ title, subtitle, text, aboutUsMD, servicesMD }) => {
  return (
    <InfoCompletStyle $aboutUsMD={aboutUsMD}>
      <IntroducciónTitleContent $servicesMD={servicesMD}>
        <Subtitle text={title} />
        <SubtitleSec text={subtitle} />
      </IntroducciónTitleContent>
      <TextInfo text={text} servicesMD={servicesMD}/>
    </InfoCompletStyle>
  );
};

InfoComplet.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  aboutUsMD: PropTypes.bool,
  servicesMD: PropTypes.bool,
};
export default InfoComplet;
