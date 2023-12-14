import styled from "styled-components";
import PropTypes from "prop-types";

const ImageBigStyle = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
const ImageBig = ({ width, height, src, alt }) => {
  return <ImageBigStyle src={src} alt={alt} width={width} height={height} />;
};

ImageBig.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageBig;
