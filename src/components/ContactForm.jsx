import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";

const ContactFormStyle = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  @media screen and (max-width: 750px) {
    gap: 1rem;
  }
`;

const ContactFormContent = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactFormInput = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: transparent;
  border: none;
  outline: 2px solid #fff;
  font-size: 0.875rem;
  color: var(--color--textPrimary);
  &::placeholder {
    color: var(--color--textPrimary);
  }
`;

const ContactFormInputText = styled.textarea`
  width: 100%;
  height: 150px;
  font-size: 0.875rem;
  padding: 1rem 2rem;
  border-radius: 25px;
  background-color: transparent;
  color: var(--color--textPrimary);
  border: none;
  outline: 2px solid #fff;
  font-family: "Montserrat", sans-serif;
  &::placeholder {
    color: var(--color--textPrimary);
  }
`;

const ContactForm = () => {
  return (
    <ContactFormStyle>
      <ContactFormContent>
        <ContactFormInput placeholder="Nombre" />
        <ContactFormInput placeholder="Apellido" />
      </ContactFormContent>
      <ContactFormContent>
        <ContactFormInput placeholder="Email" />
        <ContactFormInput placeholder="Número telefónico" />
      </ContactFormContent>
      <ContactFormInput placeholder="Asunto" />
      <ContactFormInputText placeholder="Mensaje" />
      <ButtonPrimary text="ENVIAR A HIDRA" padding={"1rem 4rem"} />
    </ContactFormStyle>
  );
};

export default ContactForm;
