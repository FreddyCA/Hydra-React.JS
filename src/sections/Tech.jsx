import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import TechBanner from "../components/TechBanner";
import tech1IMG from "../assets/png/tech1.png";
import tech2IMG from "../assets/png/tech2.png";
import tech3IMG from "../assets/png/tech3.png";
import tech4IMG from "../assets/png/tech4.png";
import TechItem from "../components/TechItem";

const TechStyle = styled.div`
  padding: 2rem 0;
  @media screen and (max-width: 1020px) {
    padding: 1rem 0;
  }
`;

const TechItemsContent = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  
`;

const Tech = () => {
  const data = [
    { img: tech1IMG, alt: "imagen de referencia tech 1" },
    { img: tech2IMG, alt: "imagen de referencia tech 2" },
    { img: tech3IMG, alt: "imagen de referencia tech 3" },
    { img: tech4IMG, alt: "imagen de referencia tech 4" },
  ];
  return (
    <SectionContent>
      <TechStyle id="technologies">
        <TechBanner />
        <TechItemsContent>
          {data.map((item) => (
            <TechItem key={item.alt} img={item.img} alt={item.alt} />
          ))}
        </TechItemsContent>
      </TechStyle>
    </SectionContent>
  );
};

export default Tech;
