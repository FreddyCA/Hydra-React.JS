import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonPrimaryStyle = styled.button`
  background: linear-gradient(to right, #8176af, #c0b7e8);
  color: var(--color--textSecondary);
  width: min-content;
  border: none;
  border: 2px solid #302c42;
  border-radius: 40px;
  white-space: nowrap;
  height: min-content;
  font-weight: 700;
  font-size: 0.8rem;
  padding: ${(props) => props.$padding || "1rem 2.6rem"};
  margin: ${(props) => props.$margin };
  cursor: pointer;
  &:hover {
    background: none;
    border: 2px solid #fff;
    color: var(--color--textPrimary);
  }
`;

const ButtonPrimary = ({ text, padding, margin }) => {
  return <ButtonPrimaryStyle $padding={padding} $margin={margin}>{text}</ButtonPrimaryStyle>;
};
ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

export default ButtonPrimary;
