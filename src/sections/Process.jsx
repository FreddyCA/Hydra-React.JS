import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import InfoComplet from "../components/InfoComplet";
import processBG from "../assets/svg/processBG.svg";
import ProcessItem from "../components/ProcessItem";

const ProcessStyle = styled.div`
  padding: 2rem 0;
`;

const ProcessItemsContent = styled.div`
  background-image: url(${processBG});
  background-repeat: no-repeat;
  background-position: 0px 50px;
  background-size: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  gap: 0.5rem;
`;

const Process = () => {
  const data = [
    {
      id: "concept1",
      title: "Concepto y diseño 3D",
      num: "01",
    },
    {
      id: "concept2",
      title: "Diseño de interacción",
      num: "02",
    },
    {
      id: "concept3",
      title: "Pruebas de usuario",
      num: "03",
    },
    {
      id: "concept4",
      title: "Despliegue de Hydra VR",
      num: "04",
    },
  ];
  return (
    <SectionContent>
      <ProcessStyle id="howTo">
        <InfoComplet
          title="¿CÓMO CONSTRUIMOS?"
          subtitle="¿CON HIDRA VR?"
          text="Cada experiencia es meticulosamente creada mediante innovación digital y creatividad, llevando a los participantes a un viaje único. Desde la planificación hasta la ejecución, nos comprometemos a ofrecer experiencias excepcionales que trasciendan los límites de la realidad virtual, brindando un impacto duradero en la interacción y la inmersión del usuario."
        />
        <ProcessItemsContent>
          {data.map(({ id, title, num }) => (
            <ProcessItem key={id} title={title} num={num} />
          ))}
        </ProcessItemsContent>
      </ProcessStyle>
    </SectionContent>
  );
};

export default Process;
