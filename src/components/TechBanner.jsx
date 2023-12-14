import styled from "styled-components";
import bannerTechIMG from "../assets/png/bannerTech.png";
import Subtitle from "./Subtitle";
import SubtitleSec from "./SubtitleSec";
import iconTech from "../assets/svg/iconTech.svg";

const TechBannerStyle = styled.div`
  position: relative;
  background-image: url(${bannerTechIMG});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  height: 220px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.65rem;
`;
const TechBannerButton = styled.img`
  position: absolute;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 10px solid #433d60;
  background-color: #c0b7e8;
  bottom: -2rem;
`;

const TechBanner = () => {
  return (
    <TechBannerStyle>
      <Subtitle text="TECNOLOGÍAS Y HARDWARE" />
      <SubtitleSec text="UTILIZADO POR HYDRA VR." arrow />
      <TechBannerButton src={iconTech} alt="imagnes incon tech" />
    </TechBannerStyle>
  );
};

export default TechBanner;
