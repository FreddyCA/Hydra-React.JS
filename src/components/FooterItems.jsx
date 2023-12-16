import styled from "styled-components";
import PropTypes from "prop-types";
import FooterTextItem from "./FooterTextItem";

const FooterItemsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const FooterItems = ({ data }) => {
  return (
    <FooterItemsStyle>
      {data.map((item, index) => (
        <FooterTextItem
          key={`${index}${item.title}`}
          text={item.title}
        ></FooterTextItem>
      ))}
    </FooterItemsStyle>
  );
};
FooterItems.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FooterItems;
