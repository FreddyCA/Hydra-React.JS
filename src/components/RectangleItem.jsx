import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const RectangleItemStyle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 100%;
  width: 30%;
  ${(props) =>
    props.index === 1 &&
    css`
      border-left: 3px solid rgb(192, 183, 232, 0.5);
      border-right: 3px solid rgb(192, 183, 232, 0.5);
      width: 33%;
      justify-content: center;
    `}
`;
const RectangleItemImg = styled.img`
  width: 40px;
  height: 40px;
`;

const RectangleItemTextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0;
  gap: 0.5rem;
  height: 100%;
`;
const RectangleItemTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color--textPrimary);
`;
const RectangleItemText = styled.p`
  font-size: 0.855rem;
  color: var(--color--textPrimary);
`;

const RectangleItem = ({ title, text, src, index }) => {
  console.log(index);
  return (
    <RectangleItemStyle index={index}>
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
