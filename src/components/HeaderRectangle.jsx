import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import RectangleItem from "./RectangleItem";
import positionSVG from "../assets/svg/position.svg";
import callSVG from "../assets/svg/phone.svg";
import mailSVG from "../assets/svg/mail.svg";
import iconLeft from "../assets/svg/left.svg";
import iconRigth from "../assets/svg/rigth.svg";
import { useState } from "react";
const HeaderRectangleStyle = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: center;
  height: 150px;
  justify-content: space-between;
  background: linear-gradient(
    to right,
    #211e2e,
    rgb(58, 52, 86, 0.95),
    #211e2e
  );
  padding: 1rem 2rem;
  border-radius: 75px;
  @media screen and (max-width: 1020px) {
    padding: 1rem 1.5rem;
    height: 120px;
  }
  @media screen and (max-width: 870px) {
    width: min-content;
    gap: 0.5rem;
    margin: 2rem auto;
  }
  @media screen and (max-width: 576px) {
    width: auto;
  }
`;
const HeaderImgToggleContent = styled.div`
  min-width: 50px;
  min-height: 50px;
  background: linear-gradient(to right, #8176af, #c0b7e8);
  border-radius: 50%;
  @media screen and (max-width: 576px) {
    min-width: 30px;
    min-height: 30px;
  }
  ${(props) =>
    props.$offIcon &&
    css`
      @media screen and (max-width: 576px) {
        display: none;
      }
    `}
`;
const HeaderImgToggle = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const HeaderRectangle = ({ headerItems }) => {
  const data = [
    {
      id: "item1Pay",
      title: "Haznos una visita",
      text: "Union St, Seattle, WA 98101, Estados Unidos",
      src: positionSVG,
    },
    {
      id: "item2Call",
      title: "Danos una llamada",
      text: "(110) 1111-1010",
      src: callSVG,
    },
    {
      id: "item3Mail",
      title: "Envíenos un mensaje",
      text: "Contact@HydraVTech.com",
      src: mailSVG,
    },
  ];
  const [item, setItem] = useState(0);
  const itemData = data[item];

  const toggleRight = () => {
    setItem((item + 1) % data.length);
  };

  const toggleLeft = () => {
    setItem((item - 1 + data.length) % data.length);
  };

  return (
    <HeaderRectangleStyle>
      {headerItems &&
        data.map(({ id, title, text, src }, index) => (
          <RectangleItem
            key={id}
            title={title}
            text={text}
            src={src}
            index={index}
          ></RectangleItem>
        ))}

      {!headerItems && (
        <>
          <HeaderImgToggleContent $offIcon={true}>
            <HeaderImgToggle
              src={iconLeft}
              alt="icon mostrar anterior"
              onClick={toggleLeft}
            />
          </HeaderImgToggleContent>
          <RectangleItem
            key={itemData.id}
            title={itemData.title}
            text={itemData.text}
            src={itemData.src}
            index={item}
          />
          <HeaderImgToggleContent>
            <HeaderImgToggle
              src={iconRigth}
              alt="icon mostrar siguiente"
              onClick={toggleRight}
            />
          </HeaderImgToggleContent>
        </>
      )}
    </HeaderRectangleStyle>
  );
};

HeaderRectangle.propTypes = {
  headerItems: PropTypes.bool.isRequired,
};

export default HeaderRectangle;
