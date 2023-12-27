import styled, { css } from "styled-components";
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
  width: 250px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  padding: 0 2rem;
  justify-content: end;

  ${(props) =>
    props.$bgMenu &&
    css`
      background-color: #453f5e;
      z-index: 101;
      border-bottom: 1px solid #c0b7e8;
    `}
`;
const NavBarItemsIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: auto 0;
  cursor: pointer;
`;

const NavBar = ({ desktop }) => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <NavBarStyle>
      <LogoNavBar />

      {!desktop && (
        <div>
          {!desktop && (
            <NavBarItemsMenu $bgMenu={!menu}>
              {menu ? (
                <NavBarItemsIcon
                  src={menuIconOpen}
                  alt="abrir menu"
                  onClick={toggleMenu}
                />
              ) : (
                <NavBarItemsIcon
                  src={menuIconClose}
                  alt="cerrar menu"
                  onClick={toggleMenu}
                />
              )}
            </NavBarItemsMenu>
          )}
          {!menu && <NavBarItems desktop={desktop} />}
        </div>
      )}

      {desktop && (
        <>
          <NavBarItems desktop={desktop} />
          <NavBarLogin />
        </>
      )}
    </NavBarStyle>
  );
};

NavBar.propTypes = {
  desktop: PropTypes.bool.isRequired,
};

export default NavBar;
