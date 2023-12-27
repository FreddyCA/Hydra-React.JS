import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import InfoComplet from "../components/InfoComplet";
import ImageBig from "../components/ImageBig";
import aboutImg from "../assets/png/aboutImg.png";
import Subtitle from "../components/Subtitle";
import SubtitleSec from "../components/SubtitleSec";
import TextInfo from "../components/TextInfo";
import ButtonPrimary from "../components/ButtonPrimary";
const AboutStyle = styled.div`
  padding: 1rem 0;
`;

const AboutContentInfo = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  @media screen and (max-width: 1020px) {
    margin-top: 4rem;
    align-items: center;
  }
  @media screen and (max-width: 750px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

const AboutTextContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 750px) {
    width: auto;
    align-items: center;
  }
`;

const AboutTitle = styled.div`
  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const About = () => {
  const data = {
    title: "Introducción",
    subtitle: "A HYDRA VR",
    text: "Bienvenido a un universo digital donde la realidad se entrelaza con la imaginación. Esta aventura virtual es más que una escapada; es un viaje fascinante hacia lo desconocido. Sumérgete en paisajes virtuales asombrosos, descubre secretos ocultos y siente la emoción de lo inesperado.",
  };
  return (
    <SectionContent>
      <AboutStyle id="aboutUs">
        <InfoComplet
          title={data.title}
          subtitle={data.subtitle}
          text={data.text}
          aboutUsMD
        />
        <AboutContentInfo>
          <ImageBig
            src={aboutImg}
            alt="imagen de referencia a About"
            height="400px"
            width="350px"
            aboutUs={true}
          />
          <AboutTextContent>
            <AboutTitle>
              <Subtitle text="Sobre Nosotros" />
              <SubtitleSec text="HYDRA VR" arrow />
            </AboutTitle>
            <TextInfo text="Nuestra filosofía se resume en 'Sumérgete en una Aventura Virtual Única'. Cada proyecto que emprendemos busca ir más allá de lo convencional, ofreciendo a los usuarios un viaje inmersivo y emocionante. Con un equipo apasionado, fusionamos la creatividad con la tecnología para llevar a nuestros clientes a lugares inexplorados y estimular sus sentidos de maneras innovadoras. Únete a nosotros en esta travesía, donde la realidad virtual se convierte en una puerta hacia nuevas fronteras y emociones. ¡Bienvenido a la evolución digital!" />
            <ButtonPrimary
              margin={"1rem 0 0"}
              text="PONTE EN CONTACTO"
              padding={"1rem 1.5rem"}
            />
          </AboutTextContent>
        </AboutContentInfo>
      </AboutStyle>
    </SectionContent>
  );
};

export default About;
