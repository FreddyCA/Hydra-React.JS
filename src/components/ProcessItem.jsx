import styled from "styled-components";
import arrowIcon from "../assets/svg/shape.svg";
import PropTypes from "prop-types";

const ProcessItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  width: 200px;
  height: 300px;
  @media screen and (max-width: 1020px) {
    height: 250px;
    margin: 0 auto;
    width: 150px;
  }
`;

const ProcessItemNUM = styled.div`
  height: 150px;
  width: 150px;
  background: linear-gradient(to right, #8176af, #c0b7e8);
  border-radius: 100%;
  outline: 16px solid rgba(13, 13, 13, 0.4);
  font-size: 3rem;
  font-weight: 700;
  color: var(--color--textSecondary);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1020px) {
    height: 100px;
    width: 100px;
    font-size: 2.5rem;
    outline: 12px solid rgba(13, 13, 13, 0.4);
  }
`;

const ProcessItemTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color--textPrimary);
`;
const ProcessItemIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ProcessItemTextContent = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 2rem 0 0 0;
`;

const ProcessItem = ({ title, num }) => {
  return (
    <ProcessItemStyle>
      <ProcessItemNUM>{num}</ProcessItemNUM>
      <ProcessItemTextContent>
        <ProcessItemIcon src={arrowIcon} alt="icon arrow rigth" />
        <ProcessItemTitle>{title}</ProcessItemTitle>
      </ProcessItemTextContent>
    </ProcessItemStyle>
  );
};

ProcessItem.propTypes = {
  title: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
};

export default ProcessItem;
