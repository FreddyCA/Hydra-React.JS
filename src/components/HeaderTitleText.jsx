import styled from "styled-components";
import TitleGradient from "./TitleGradient";

const HeaderTitleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const HeaderTitlePart = styled.div`
  display: flex;
  align-items: end;
  gap: 0.7rem;
`;
const HeaderTitle = styled.h1`
  color: var(--color--textPrimary);
  font-size: 2.5rem;
  font-weight: 700;
`;

const HeaderTitleText = () => {
  return (
    <HeaderTitleContent>
      <HeaderTitlePart>
        <TitleGradient text="Sumérgete" />
        <HeaderTitle>En Una</HeaderTitle>
      </HeaderTitlePart>
      <HeaderTitlePart>
        <HeaderTitle>Aventura Virtual</HeaderTitle>
        <TitleGradient text="Única" />
      </HeaderTitlePart>
    </HeaderTitleContent>
  );
};

export default HeaderTitleText;
