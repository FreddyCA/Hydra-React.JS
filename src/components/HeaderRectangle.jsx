import styled from "styled-components";
import RectangleItem from "./RectangleItem";
import positionSVG from "../assets/svg/position.svg";
import callSVG from "../assets/svg/phone.svg";
import mailSVG from "../assets/svg/mail.svg";
const HeaderRectangleStyle = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: center;
  height: 150px;
  justify-content: space-between;
  background: linear-gradient(to right, #211E2E, rgb(58, 52, 86, 0.95), #211E2E);
  padding: 1rem 2rem;
  border-radius: 75px;
`;

const HeaderRectangle = () => {
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
        text:"(110) 1111-1010",
        src: callSVG,
      },
      {
        id: "item3Mail",
        title: "Envíenos un mensaje",
        text:"Contact@HydraVTech.com",
        src: mailSVG,
      },
  ];
  return (
    <HeaderRectangleStyle>
    {data.map(({id, title, text, src}, index) => (
        <RectangleItem key={id} title={title} text={text} src={src} index={index}></RectangleItem>
    ))}
    </HeaderRectangleStyle>
  );
};

export default HeaderRectangle;
