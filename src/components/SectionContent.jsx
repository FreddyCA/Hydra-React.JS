import styled from "styled-components";
import PropTypes from "prop-types";

const SectionContentStyle = styled.div`
  margin: 1rem auto;
  padding: 2rem;
  width: 992px;
  @media screen and (max-width: 1020px) {
    width: auto;
    margin: 0;
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 750px) {
    padding: 1rem;
  }
`;

const SectionContent = ({ children }) => {
  return <SectionContentStyle>{children}</SectionContentStyle>;
};

SectionContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionContent;
