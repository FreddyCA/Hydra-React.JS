import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonPrimaryStyle = styled.button`
  background: linear-gradient(to right, #8176af, #c0b7e8);
  color: var(--color--textSecondary);
  border: none;
  outline: 2px solid transparent;
  border-radius: 40px;
  white-space: nowrap;
  height: min-content;
  font-weight: 700;
  font-size: 0.8rem;
  padding: ${(props) => props.padding || "1rem 2.6rem"};
  cursor: pointer;
  &:hover {
    background: none;
    outline: 2px solid #fff;
    color: var(--color--textPrimary);
  }
`;

const ButtonPrimary = ({ text, padding }) => {
  return <ButtonPrimaryStyle padding={padding}>{text}</ButtonPrimaryStyle>;
};
ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.string,
};

export default ButtonPrimary;
