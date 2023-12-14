import styled from "styled-components";

const NavBarItemsContentStyle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const NavBarItemStyle = styled.a`
  padding: 1rem;
  text-decoration: none;
  color: var(--color--textPrimary);
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 700;

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

const NavBarItems = () => {
  return (
    <NavBarItemsContentStyle>
      <NavBarItemStyle href="#">Acerca de Nosotros</NavBarItemStyle>
      <NavBarItemStyle href="#">Servicios</NavBarItemStyle>
      <NavBarItemStyle href="#">Tecnologías</NavBarItemStyle>
      <NavBarItemStyle href="#">Cómo</NavBarItemStyle>
    </NavBarItemsContentStyle>
  );
};

export default NavBarItems;
