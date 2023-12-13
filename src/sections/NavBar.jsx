import styled from "styled-components";
import ButtonPrimary from "../components/ButtonPrimary";

const NavBarStyle = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <ButtonPrimary text="BUILD YOUR WORLD" />
    </NavBarStyle>
  );
};

export default NavBar;
