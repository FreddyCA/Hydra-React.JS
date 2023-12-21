import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";

const NavBarLoginStyle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavBarContact = styled.a`
  color: var(--color--textPrimary);
  border: 2px solid var(--color--textPrimary);
  padding: 1rem 2.1rem;
  text-decoration: none;
  border-radius: 40px;
  font-weight: 700;
  font-size: 0.8rem;
  &:hover {
    background-color: #c0b7e8;
    color: var(--color--textSecondary);
  }
`;

const NavBarLogin = () => {
  return (
    <NavBarLoginStyle>
      <NavBarContact href="#contact">Contáctenos</NavBarContact>
      <ButtonPrimary text="Únete a Hydra" padding={"1rem 2.1rem"} />
    </NavBarLoginStyle>
  );
};

export default NavBarLogin;
