import styled from "styled-components";
import Subtitle from "../components/Subtitle";
import SubtitleSec from "../components/SubtitleSec";
import SectionContent from "../components/SectionContent";
import ContactForm from "../components/ContactForm";

const FormStyle = styled.div`
  background: radial-gradient(circle closest-side at 50% 50%, #403a5f, #211e2e);
  border-radius: 100px;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Form = () => {
  return (
    <SectionContent>
      <FormStyle id="contact">
        <Subtitle text="ÚNETE A HIDRA" />
        <SubtitleSec
          text="Construyamos Tu Experiencia De Realidad Virtual"
          arrow
        />
        <ContactForm />
      </FormStyle>
    </SectionContent>
  );
};

export default Form;
