import styled from "styled-components";
import PropTypes from "prop-types";
import Subtitle from "./Subtitle";
import SubtitleSec from "./SubtitleSec";
import TextInfo from "./TextInfo";

const InfoCompletStyle = styled.div`
  display: flex;
`;

const IntroducciónTitleContent = styled.div`
  margin-right: 2rem;
  min-width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const InfoComplet = ({ title, subtitle, text }) => {
  return (
    <InfoCompletStyle>
      <IntroducciónTitleContent>
        <Subtitle text={title} />
        <SubtitleSec text={subtitle} />
      </IntroducciónTitleContent>
      <TextInfo text={text} />
    </InfoCompletStyle>
  );
};

InfoComplet.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default InfoComplet;
