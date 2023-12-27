import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ImageBigStyle = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media screen and (max-width: 1020px) {
    ${(props) =>
      props.$header &&
      css`
        height: 300px;
        width: 330px;
        @media screen and (max-width: 750px) {
          height: 250px;
          width: 280px;
        }
      `}
    ${(props) =>
      props.$aboutUs &&
      css`
        height: 350px;
        width: 300px;
      `}
  }
`;
const ImageBig = ({ width, height, src, alt, header, aboutUs }) => {
  return (
    <ImageBigStyle
      src={src}
      alt={alt}
      width={width}
      height={height}
      $header={header}
      $aboutUs={aboutUs}
    />
  );
};

ImageBig.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  header: PropTypes.bool,
  aboutUs: PropTypes.bool,
};

export default ImageBig;
