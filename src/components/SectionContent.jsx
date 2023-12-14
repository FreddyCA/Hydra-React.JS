import styled from "styled-components";
import PropTypes from "prop-types";

const SectionContentStyle = styled.div`
  margin: 1rem auto;
  padding: 2rem;
  width: 992px;
`;

const SectionContent = ({ children }) => {
  return <SectionContentStyle>{children}</SectionContentStyle>;
};

SectionContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionContent;
