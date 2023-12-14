import styled from "styled-components";
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
`;
const HeaderContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 480px;
`;

const Header = () => {
  return (
    <SectionContent>
      <HeaderStyle>
        <HeaderContentInfo>
          <HeaderTitleText />
          <TextInfo text="Descubre un mundo fascinante lleno de emociones y exploración mientras te sumerges en esta aventura digital inigualable. ¿Estás listo para vivir una experiencia virtual como nunca antes?" />
          <ButtonPrimary margin={"3rem 0 0"} text="CONSTRUYE TU MUNDO" padding={"1rem 2.68rem"} />
        </HeaderContentInfo>
        <ImageBig src={imgHeader} alt="Imagen principal header" height="370px" width="400px" />
      </HeaderStyle>
      <HeaderRectangle></HeaderRectangle>
    </SectionContent>
  );
};

export default Header;
