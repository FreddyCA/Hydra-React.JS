import styled from "styled-components";
import PropTypes from "prop-types";
import SectionContent from "../components/SectionContent";
import HeaderTitleText from "../components/HeaderTitleText";
import TextInfo from "../components/TextInfo";
import ButtonPrimary from "../components/ButtonPrimary";
import ImageBig from "../components/ImageBig";
import imgHeader from "../assets/png/headerMask.png";
import HeaderRectangle from "../components/HeaderRectangle";

const HeaderStyle = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (max-width: 750px) {
    padding: 1rem 0;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const HeaderContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 480px;
  @media screen and (max-width: 1020px) {
    max-width: 450px;
    gap: 1rem;
  }
  @media screen and (max-width: 750px) {
    width: auto;
    align-items: center;
    gap: 0;
  }
`;

const Header = ({ headerItems }) => {
  return (
    <SectionContent>
      <HeaderStyle>
        <HeaderContentInfo>
          <HeaderTitleText />
          <TextInfo header text="Descubre un mundo fascinante lleno de emociones y exploración mientras te sumerges en esta aventura digital inigualable. ¿Estás listo para vivir una experiencia virtual como nunca antes?" />
          <ButtonPrimary
            margin={"2.5rem 0 0"}
            text="CONSTRUYE TU MUNDO"
            padding={"1rem 2.68rem"}
          />
        </HeaderContentInfo>
        <ImageBig
          src={imgHeader}
          alt="Imagen principal header"
          height="370px"
          width="400px"
          header
        />
      </HeaderStyle>
      <HeaderRectangle headerItems={headerItems}></HeaderRectangle>
    </SectionContent>
  );
};

Header.propTypes = {
  headerItems: PropTypes.bool.isRequired,
};
export default Header;
