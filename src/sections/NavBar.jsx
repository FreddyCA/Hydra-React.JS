import styled from "styled-components";
import PropTypes from "prop-types";

import LogoNavBar from "../components/LogoNavBar";
import NavBarItems from "../components/NavBarItems";
import NavBarLogin from "../components/NavBarLogin";
import menuIconOpen from "../assets/svg/menu.svg";
import menuIconClose from "../assets/svg/menuX.svg";
import { useState } from "react";

const NavBarStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 2rem;
  position: relative;
`;

const NavBarItemsMenu = styled.div`
  height: 100px;
  width: 100%;
`;
const NavBarItemsIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: auto 0;
  cursor: pointer;
`;


const NavBar = ({ desktop }) => {
  const [menu, setMenu] = useState(false);
  return (
    <NavBarStyle>
      <LogoNavBar />
      <div>
        {!desktop && (
          <NavBarItemsMenu>
            {menu ? (
              <NavBarItemsIcon src={menuIconOpen} alt="abrir menu" />
            ) : (
              <NavBarItemsIcon src={menuIconClose} alt="cerrar menu" />
            )}
          </NavBarItemsMenu>
        )}
        <NavBarItems desktop={desktop} />
      </div>
      {desktop && <NavBarLogin />}
    </NavBarStyle>
  );
};

NavBar.propTypes = {
  desktop: PropTypes.bool.isRequired,
};

export default NavBar;
