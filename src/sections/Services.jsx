import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import InfoComplet from "../components/InfoComplet";
import ServiceItem from "../components/ServiceItem";
import outoorIMG from "../assets/png/outoor.png";
import simulationIMG from "../assets/png/simulation.png";
import educationIMG from "../assets/png/education.png";
import selfCareIMG from "../assets/png/selfCare.png";
const ServicesStyle = styled.div`
  padding: 2rem 0;
`;

const ServicesContentStyle = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
const Services = () => {
  const data = [
    {
      title: "EDUCACIÓN",
      desc: "Explora educación virtual excepcional, aprendizaje interactivo y experiencias enriquecedoras.",
      img: educationIMG,
      id: "education1",
    },
    {
      title: "SIMULACIÓN",
      desc: "Sumérgete en una Educación Virtual Excepcional con Simulaciones Impactantes.",
      img: simulationIMG,
      id: "simulation1",
    },
    {
      title: "AUTOCUIDADO",
      desc: "Descubre Educación Virtual Inspiradora y Cuidado Personal Transformador.",
      img: selfCareIMG,
      id: "selfCare1",
    },
    {
      title: "EXTERIOR",
      desc: "Explora Educación Virtual Innovadora y Vive Bienestar Personal en Exteriores.",
      img: outoorIMG,
      id: "outoor1",
    },
  ];
  return (
    <SectionContent>
      <ServicesStyle id="services">
        <InfoComplet
          title="¿POR QUÉ CONSTRUIR?"
          subtitle="¿CON HIDRA?"
          text="En cada proyecto, desafiamos los límites de la realidad virtual para ofrecer experiencias exclusivas con narrativas cautivadoras y paisajes digitales impresionantes. Nuestro compromiso con la innovación y la excelencia garantiza resultados que superan expectativas, brindando a cada construcción un toque distintivo y emocionante."
        />
        <ServicesContentStyle>
          {data.map(({ id, title, img, desc }) => (
            <ServiceItem key={id} title={title} desc={desc} img={img} />
          ))}
        </ServicesContentStyle>
      </ServicesStyle>
    </SectionContent>
  );
};

export default Services;
