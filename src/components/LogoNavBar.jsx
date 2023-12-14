import styled from "styled-components";
import logoHydra from "../assets/svg/logoHydra.svg";
import logoHydraName from "../assets/svg/logoHydraName.svg";

const LogoNavBarStyle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;
const LogoNavBarImgStyle = styled.img`
  height: ${(props) => props.height};
`;

const LogoNavBar = () => {
  return (
    <LogoNavBarStyle>
      <LogoNavBarImgStyle src={logoHydra} alt="logo Hydra" height={"90px"} />
      <LogoNavBarImgStyle src={logoHydraName} alt="logo Hydra" height={"45px"} />
    </LogoNavBarStyle>
  );
};

export default LogoNavBar;
