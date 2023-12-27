import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const RectangleItemStyle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 100%;
  width: 30%;
  @media screen and (max-width: 870px) {
    width: 300px;
    justify-content: center;
  }

  @media screen and (max-width: 576px) {
    width: auto;
  }
  ${(props) =>
    props.$index === 1 &&
    css`
      border-left: 3px solid rgb(192, 183, 232, 0.5);
      border-right: 3px solid rgb(192, 183, 232, 0.5);
      width: 33%;
      justify-content: center;
      @media screen and (max-width: 870px) {
        width: 300px;
        border: none;
      }
    `}
`;
const RectangleItemImg = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 1020px) {
    width: 35px;
    height: 35px;
  }
`;
const RectangleItemTextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0;
  gap: 0.5rem;
  height: 100%;
  @media screen and (max-width: 870px) {
    justify-content: center;
    padding: 0;
  }
`;
const RectangleItemTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color--textPrimary);
  @media screen and (max-width: 1020px) {
    font-size: 1rem;
  }
`;
const RectangleItemText = styled.p`
  font-size: 0.855rem;
  color: var(--color--textPrimary);
  @media screen and (max-width: 870px) {
    max-width: 200px;
  }
`;

const RectangleItem = ({ title, text, src, index }) => {
  return (
    <RectangleItemStyle $index={index}>
      <RectangleItemImg src={src} alt={title} />
      <RectangleItemTextContent>
        <RectangleItemTitle>{title}</RectangleItemTitle>
        <RectangleItemText>{text}</RectangleItemText>
      </RectangleItemTextContent>
    </RectangleItemStyle>
  );
};

RectangleItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RectangleItem;
