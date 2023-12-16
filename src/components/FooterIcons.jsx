import styled from "styled-components";
import facebookSVG from "../assets/svg/facebook.svg";
import twiterSVG from "../assets/svg/twitter.svg";
import linkedinSVG from "../assets/svg/linkedin.svg";
import youtubeSVG from "../assets/svg/youtube.svg";
import instagramSVG from "../assets/svg/instagram.svg";
import pinterestSVG from "../assets/svg/pinterest.svg";

const FooterIconsStyle = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;
`;

const FooterIconsSVG = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const FooterIcons = () => {
  const data = [
    facebookSVG,
    twiterSVG,
    linkedinSVG,
    youtubeSVG,
    instagramSVG,
    pinterestSVG,
  ];
  return (
    <FooterIconsStyle>
      {data.map((item, index) => (
        <FooterIconsSVG key={index} src={item} alt="icon de red social" />
      ))}
    </FooterIconsStyle>
  );
};

export default FooterIcons;
