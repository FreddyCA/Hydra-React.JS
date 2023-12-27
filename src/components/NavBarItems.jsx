import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const NavBarItemsContentStyle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media screen and (max-width: 1020px) {
    flex-direction: column;
    width: 250px;
    position: absolute;
    right: 0;
    top: 100px;
    z-index: 100;
    gap: 0;
  }
`;

const ListAnimationStyle = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavBarItemStyle = styled.a`
  padding: 1rem;
  text-decoration: none;
  color: var(--color--textPrimary);
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 700;

  @media screen and (max-width: 1020px) {
    width: 100%;
    background-color: #453f5e;
    text-align: center;
    border-top: 1px solid #c0b7e8;
    border-bottom: 1px solid #c0b7e8;
    padding: 1.5rem 1rem;
    animation: ${ListAnimationStyle} 0.3s ease-in-out;
    animation-fill-mode: both;

    &:nth-child(1) {
      animation-delay: 0.01s;
      z-index: 90;
    }
    &:nth-child(2) {
      animation-delay: 0.05s;
      z-index: 89;
    }
    &:nth-child(3) {
      animation-delay: 0.1s;
      z-index: 79;
      
    }
    &:nth-child(4) {
      animation-delay: 0.15s;
      z-index: 69;

    }
    &:nth-child(5) {
      animation-delay: 0.2s;
      z-index: 59;

    }
    &:nth-child(6) {
      animation-delay: 0.25s;
      z-index: 49;

    }
  }

  position: relative;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    left: 50%;
    background-color: #c0b7e8;
    transition: width 0.4s ease;
  }
  &::before {
    top: 0;
    transform: translateX(-50%);
    height: 4px;
  }
  &::after {
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
  }
`;


const NavBarItems = ({ desktop }) => {
  return (
    <NavBarItemsContentStyle>
      <NavBarItemStyle href="#aboutUs">Acerca de Nosotros</NavBarItemStyle>
      <NavBarItemStyle href="#services">Servicios</NavBarItemStyle>
      <NavBarItemStyle href="#technologies">Tecnologías</NavBarItemStyle>
      <NavBarItemStyle href="#howTo">Cómo</NavBarItemStyle>
      {!desktop && (
        <>
          <NavBarItemStyle href="#contact">Contáctenos</NavBarItemStyle>
          <NavBarItemStyle href="#">Únete a Hydra</NavBarItemStyle>
        </>
      )}
    </NavBarItemsContentStyle>
  );
};
NavBarItems.propTypes = {
  desktop: PropTypes.bool.isRequired,
};

export default NavBarItems;
