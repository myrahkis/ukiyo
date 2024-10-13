import { useDarkMode } from "../context/DarkModeContext";
import styled from "styled-components";
import Row from "../ui/Row";

const StyledLogo = styled.img`
  width: 6rem;
  height: 6rem;
`;

const H1 = styled.h1`
  color: ${(props) =>
    props.isDark ? "var(--light-text-color)" : "var(--light-bg-color)"};
  font-size: 2.5rem;
  font-weight: 800;
  font-style: italic;
`;

function Logo() {
  const { isDark } = useDarkMode();
  return (
    <Row>
      <StyledLogo src="/logo.svg" alt="logo" />
      <H1 isDark={isDark}>UKIYO</H1>
    </Row>
  );
}

export default Logo;
