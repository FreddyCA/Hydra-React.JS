import styled from "styled-components";
import ImageBig from "../components/ImageBig";
import iconHydra from "../assets/svg/logoHydra.svg";
import FooterItems from "../components/FooterItems";
import FooterTextItem from "../components/FooterTextItem";
import ButtonPrimary from "../components/ButtonPrimary";
import FooterIcons from "../components/FooterIcons";
import BorderGradient from "../components/BorderGradient";

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin-top: 2rem;
  padding: 2rem 4rem;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

const FooterBoxRigth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-items: start;
  @media screen and (max-width: 750px) {
    align-items: center;
  }
`;

const FooterDev = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  padding: 2rem;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Footer = () => {
  const dataBo1 = [
    { title: "ACERCA DE" },
    { title: "SERVICIOS" },
    { title: "TECNOLOGÍAS" },
    { title: "CÓMO" },
    { title: "ÚNETE A HIDRA" },
  ];
  const dataBo2 = [
    { title: "F.A.Q" },
    { title: "MAPA DEL SITIO" },
    { title: "CONDICIONES" },
    { title: "LICENCIAS" },
  ];
  return (
    <>
      <FooterStyle>
        <FooterBoxRigth>
          <ImageBig
            src={iconHydra}
            alt="icon Hydra"
            height="150px"
            width="150px"
          />
        </FooterBoxRigth>
        <BorderGradient colum />
        <FooterItems data={dataBo1} />
        <BorderGradient colum />
        <FooterItems data={dataBo2} />
        <BorderGradient colum />
        <FooterBoxRigth>
          <FooterTextItem text="SOCIALIZA CON HYDRA" />
          <FooterIcons />
          <ButtonPrimary text="CONSTRUYE TU MUNDO" padding={"1rem 2rem"} />
        </FooterBoxRigth>
      </FooterStyle>
      <BorderGradient />
      <FooterDev>
        <FooterTextItem text="UI BY ZINE. E. FALOUTI | 2023" />
        <FooterTextItem text="|" />
        <FooterTextItem text="DEVELOPED CARLOS ARI | 2023" />
      </FooterDev>
    </>
  );
};

export default Footer;
