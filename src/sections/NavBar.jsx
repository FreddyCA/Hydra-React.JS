import styled from "styled-components";
import LogoNavBar from "../components/LogoNavBar";
import NavBarItems from "../components/NavBarItems";
import NavBarLogin from "../components/NavBarLogin";

const NavBarStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 2rem;
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <LogoNavBar />
      <NavBarItems />
      <NavBarLogin />
    </NavBarStyle>
    // continuar con header
  );
};

export default NavBar;
